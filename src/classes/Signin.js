import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  AsyncStorage
} from 'react-native'
import Styles from '../styles/style'
import { Button } from 'react-native-elements'
import {MainButton} from '../components/Buttons'

import {MainInput, MainSelect} from '../components/Input'

import KeyboardHeight from '../components/KeyboardHeight'

import api from '../components/api'
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import validate from '../validation/Signup'

import { strings, lang } from '../locales/i18n';

var {height, width} = Dimensions.get('window');
height = height;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: height,
      isVisible: false,
      isVisible1: false,
      forgetEmail: '',
      userId: null,
      code: '',
      lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
      email: '',
      password: '',
      secure: true
    }
    AsyncStorage.getItem('lang')
    .then((value) => {
      this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
    })
    AsyncStorage.getItem('access_token')
    .then((value) => {
      if (value) {
          this.props.navigation.navigate('Home')
      }
    })
  }
  
  resentCode(){
    var data = {
      UserId: this.state.userId
    }
    fetch(api+'Register/sendcodeagain', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      //alert(JSON.stringify(responseJson))
    })
    .catch((err) => { 
      alert(err); 
    });
  }
  submitCode(){
    if (this.state.code.length == 4) {

      var data = {
        UserId: this.state.userId,
        verificationCode: this.state.code
      }
      fetch(api+'userdetail/VerifyResetPassword', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        if (responseJson.success) {
          this.setState({ isVisible1: false }); 
          this.props.navigation.navigate('Reset', {userId: this.state.userId})
        }
        else{
          this.setState({errorCodeMsg: responseJson.message})
        }
        //alert(JSON.stringify(responseJson))
      })
      .catch((err) => { 
        alert(err); 
      });
    }
  }
  forgetPassword(){
    var emailError = null;
    if (!this.state.forgetEmail) {
      emailError = 'This field is required'
    }
    if (emailError){
      this.setState({ forgetEmailError: emailError }); 
    }
    else{
      this.setState({ forgetEmailError: emailError }); 
      var data = {
        email: this.state.forgetEmail
      }
      fetch(api+'userdetail/forgotpassword', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        if (responseJson.success) {
          // alert(responseJson.data)
          this.setState({userId:responseJson.data})
          this.setState({ isVisible: false }); 
          this.setState({ isVisible1: true });
        }
        else{
          // alert(JSON.stringify(responseJson))
          //alert(responseJson.message)
          this.setState({ forgetEmailError: responseJson.message }); 
        }
      })
      .catch((err) => { 
        alert(err); 
      });
      //this.setState({ isVisible: false }); 
      //this.setState({ isVisible1: true });
    }
  }
  login(){
    var emailError = null;
    var passwordError = null;
    if (this.state.email) {
      emailError = validate('email', this.state.email)
    }
    else{
      emailError = 'This field is required'
    }
    if (!this.state.password) {
      passwordError = 'This field is required'
    }

    this.setState({
      emailError: emailError,
      passwordError: passwordError,
    })
    if (!passwordError && !emailError){
      fetch('http://malican.centric.ae/MallAPI/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'grant_type=password&username='+this.state.email+'&password='+this.state.password+'&ActionType=1'
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        //alert(JSON.stringify(responseJson))
        if (responseJson.error) {
          var dataMessage = JSON.parse(responseJson.error_description)
          for (var i = 0; i < dataMessage.length; i++) {
            // alert(dataMessage[i].key)
            // alert(dataMessage[i].value)
            if (dataMessage[i].key == 'errormessage') {
              this.setState({errorMsg: dataMessage[i].value})
            }
          }
        }
        else{
          this.setState({errorMsg: ''})
          this.setStorage('access_token', responseJson.access_token)
          this.setStorage('userid', responseJson.userId, true)
          // this.setStorage('userid', this.props.navigation.state.params.userId, true)
        }
      })
      .catch((err) => { 
        alert(err); 
      });
    }
  }
  async setStorage(key, value, red = false){
    await AsyncStorage.setItem(key, value)
    .then(x => AsyncStorage.getItem(key))
    .then((value) => {
      if (red) {
        this.setState({ isVisible: false });
        this.props.navigation.navigate('Home')
      }
    })
  }
	render () {
    const { navigate } = this.props.navigation;
  	return (
  		<View style={[Styles.fullWidth, {height: this.state.height}]}>
        <KeyboardHeight getHeight={(height) => {this.setState({height: height});}} />
        <ScrollView contentContainerStyle={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight]}>
          <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth, Styles.mt55, Styles.flex, Styles.mb200]}>
            <Icon name={(this.state.lang == 'ar') ? "ios-arrow-round-forward" : "ios-arrow-round-back"} size={50} color="#051441" />
            <Text style={[Styles.latoBlack, Styles.font60, Styles.colorDarkBlue]}>{strings('signin.s_in').toUpperCase()}</Text>
            <View style={[Styles.ml20]}></View>
          </View>
          <MainInput keyboardType="email-address" label={strings('signin.e_add')} error={this.state.emailError} placeholder={strings('signin.e_eadd')} onChangeText={(value) => this.setState({email: value})} value={this.state.email} />
          <MainInput label={strings('signin.pass')} error={this.state.passwordError} secure={this.state.secure} placeholder={strings('signin.e_pass')} onChangeText={(value) => this.setState({password: value})} value={this.state.password} iconAction={true} actionPress={() => {this.setState({secure: !this.state.secure})}} iconInput={true} icon={(this.state.secure) ? 'eye' : 'eye-with-line'}/>
          {(this.state.errorMsg) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5]}>{this.state.errorMsg}</Text> : null}
          <View style={[Styles.mt25, Styles.mb55]}>
            <MainButton title={strings('signin.next').toUpperCase()} press={() => {this.login()}} />
          </View>
          <View style={[Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.mt55]}>
            <TouchableWithoutFeedback
              onPress={() => this.setState({ isVisible: true })}
            >
              <Text style={[Styles.latoRegular, Styles.font48, Styles.colorLightBlue]}>{strings('signin.f_pass')}</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigate('Signup')}
            >
              <Text style={[Styles.latoRegular, Styles.font48, Styles.colorLightPink]}>{strings('signin.s_up')}</Text>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          backdropColor="transparent"
          style={[Styles.backWhite]}
        >
          <View style={[Styles.fullWidth, Styles.fullHeight, Styles.centerItems, Styles.VerticalCenter]}>
            <Image source={require('../../assets/forgetIcon.png')} style={[Styles.forgetIcon, Styles.mb100]} />
            <Text style={[Styles.mt55, Styles.latoBlack, Styles.font60, Styles.colorDarkBlue, Styles.mb15]}>{strings('forgotpassword.f_pass').toUpperCase()}</Text>
            <Text style={[Styles.mb15, Styles.colorLightBlue, Styles.latoRegular, Styles.font38]}>{strings('forgotpassword.e_eadd')}</Text>
            <Text style={[Styles.mb55, Styles.colorLightBlue, Styles.latoRegular, Styles.font38]}>{strings('forgotpassword.a_acc')}</Text>
            <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth]}>
              <MainInput value={this.state.forgetEmail} error={this.state.forgetEmailError} keyboardType="email-address" label={strings('forgotpassword.e_add')} placeholder={strings('signin.e_eadd')} onChangeText={(value) => {this.setState({forgetEmail:value})}} />
              <MainButton title={strings('forgotpassword.send').toUpperCase()} press={() => {this.forgetPassword()}} />
            </View>
          </View>
        </Modal>


        <Modal
          isVisible={this.state.isVisible1}
          onBackdropPress={() => this.setState({ isVisible1: false })}
          backdropColor="transparent"
          style={[Styles.backWhite, Styles.centerItems]}
        >
          <View style={[Styles.width70, Styles.fullHeight, Styles.centerItems, Styles.VerticalCenter]}>
            <Image source={require('../../assets/forgetIcon.png')} style={[Styles.forgetIcon, Styles.mb100]} />
            <Text style={[Styles.mt55, Styles.latoBlack, Styles.font60, Styles.colorDarkBlue, Styles.mb55]}>{strings('enter_code.e_code').toUpperCase()}</Text>
            <Text style={[Styles.mb15, Styles.colorLightBlue, Styles.latoRegular, Styles.font38, Styles.centerText]}>{strings('enter_code.e_mnum')}</Text>
            <View style={[Styles.mt55, Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth]}>
            <View style={[Styles.row, Styles.flexRow, Styles.mt55, Styles.fullWidth]}>
              <View style={[Styles.verifyCode, Styles.centerItems, Styles.VerticalCenter]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>{this.state.code[0]}</Text>
              </View>
              <View style={[Styles.verifyCode, Styles.centerItems, Styles.VerticalCenter]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>{this.state.code[1]}</Text>
              </View>
              <View style={[Styles.verifyCode, Styles.centerItems, Styles.VerticalCenter]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>{this.state.code[2]}</Text>
              </View>
              <View style={[Styles.verifyCode, Styles.centerItems, Styles.VerticalCenter]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>{this.state.code[3]}</Text>
              </View>
            </View>
            <TextInput maxLength={4} onChangeText={(text) => this.setState({code: text})} style={[Styles.verifyCode, Styles.fullWidth, Styles.selectText, Styles.hideDiv]} />
            </View>
            {(this.state.errorCodeMsg) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5]}>{this.state.errorCodeMsg}</Text> : null}
            <TouchableWithoutFeedback onPress={() => {this.resentCode()}}>
            <Text style={[Styles.colorDarkPink, Styles.latoBold, Styles.font48, Styles.mt55, Styles.mb35, Styles.underline]}>{strings('resend')}</Text>
            </TouchableWithoutFeedback>
            <View style={[Styles.mt55, Styles.fullWidth]}>
              <MainButton title={strings('enter_code.s_code').toUpperCase()} press={() => {this.submitCode()}} />
            </View>
          </View>
        </Modal>
      </View>
  	)
  }
}