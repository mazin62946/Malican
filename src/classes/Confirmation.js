import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  AsyncStorage
} from 'react-native'
import {MainButton} from '../components/Buttons'
import Modal from "react-native-modal";
import api from '../components/api'
import { strings, lang } from '../locales/i18n';

import Styles from '../styles/style'
export default class Confirmation extends Component {
	state = {
    isVisible: false,
    code: '',
    errorMsg: '' 
  }
  resentCode(){
    var data = {
      UserId: this.props.navigation.state.params.userId
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
    // this.setState({ isVisible: false }); navigate('Home')
    if (this.state.code.length == 4) {
      // alert(this.state.code)
      // var data = {
      //   username: this.props.navigation.state.params.userId,
      //   password: this.state.code,
      //   grant_type: 'password',
      //   ActionType: 2
      //  }
      //  alert(JSON.stringify(data))
      // const formData = new FormData()
      // formData.append('username', this.props.navigation.state.params.userId);
      // formData.append('password', this.state.code);
      // formData.append('grant_type', 'password');
      // formData.append('ActionType', 2);
      fetch('http://malican.centric.ae/MallAPI/token', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data',
        //   'Accept': "application/json"
        // },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'grant_type=password&username='+this.props.navigation.state.params.userId+'&password='+this.state.code+'&ActionType=2'
        // body: formData
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        //alert(responseJson)
        //alert(JSON.stringify(responseJson))
        // alert(responseJson.access_token)
        if (responseJson.error) {
          // alert(JSON.stringify(responseJson.error_description))
          var dataMessage = JSON.parse(responseJson.error_description)
          for (var i = 0; i < dataMessage.length; i++) {
            //alert(dataMessage[i].key)
            if (dataMessage[i].key == 'errormessage') {
              // alert(dataMessage[i].value)
              this.setState({errorMsg: dataMessage[i].value})
            }
          }
          // alert(JSON.parse(responseJson.error_description))
        }
        else{
          this.setState({errorMsg: ''})
          this.setStorage('access_token', responseJson.access_token)
          this.setStorage('userid', this.props.navigation.state.params.userId, true)
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
      const { params } = this.props.navigation.state;
    	const { navigate } = this.props.navigation;
      // alert(params.userId)
      // alert(params.code)
      // alert(params.phone)
    	return (
    		<View style={[Styles.fullWidth, Styles.fullHeight]}>
				<ImageBackground source={require('../../assets/confirmationBack.png')} style={[Styles.fullWidth, Styles.fullHeight, Styles.flex, Styles.flexRow, Styles.flexColumn]}>
    				<View></View>
    				<View style={[Styles.fullWidth, Styles.centerItems]}>
    					<Text style={[Styles.latoBlack, Styles.colorWhite, Styles.font60, Styles.mb100]}>{strings('verification_email_sent.v_ssent').toUpperCase()}</Text>
  						<Image source={require('../../assets/confirmationIcon.png')} style={[Styles.confirmationIcon, Styles.mb100]} />
  						<Text style={[Styles.colorWhite, Styles.latoBold, Styles.font40]}>{strings('verification_email_sent.s_snum')} +{params.code}{params.phone}</Text>
  						<Text style={[Styles.colorWhite, Styles.latoBold, Styles.font40]}>{strings('verification_email_sent.c_signup')}.</Text>
    				</View>
  					<View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth, Styles.mb55, {justifyContent: 'flex-end'}]}>
					    <MainButton title={strings('enter_code.thanks').toUpperCase()} press={() => this.setState({ isVisible: true })} background={'#fd5387'} />
			        </View>
  				</ImageBackground>

        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          backdropColor="transparent"
          style={[Styles.backWhite, Styles.centerItems]}
        >
          <View style={[Styles.width70, Styles.fullHeight, Styles.centerItems, Styles.VerticalCenter]}>
            <Image source={require('../../assets/forgetIcon.png')} style={[Styles.forgetIcon, Styles.mb100]} />
            <Text style={[Styles.mt55, Styles.latoBlack, Styles.font60, Styles.colorDarkBlue, Styles.mb55]}>{strings('enter_code.e_code').toUpperCase()}</Text>
            <Text style={[Styles.mb15, Styles.colorLightBlue, Styles.latoRegular, Styles.font38, Styles.centerText]}>{strings('enter_code.e_mnum')}</Text>
            <View style={[Styles.mt55, Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth]}>
            <View style={[Styles.row, Styles.flexRow, Styles.fullWidth]}>
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
            {(this.state.errorMsg) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5]}>{this.state.errorMsg}</Text> : null}
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
