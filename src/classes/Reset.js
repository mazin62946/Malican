import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import {MainInput, MainSelect, MainDateInput} from '../components/Input'
import {MainButton} from '../components/Buttons'
import { strings, lang } from '../locales/i18n';
import api from '../components/api'

export default class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
      secure: true,
      secure1: true,
      secure2: true,
    }
    AsyncStorage.getItem('lang')
    .then((value) => {
      this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
    })
  }
  reset(){
    //navigate('Signin')
    var passwordError = null;
    var confirmpasswordError = null;
    var oldpasswordError = null;
    if (!this.state.password) {
      passwordError = 'This field is required'
    }
    
    if (this.state.confirmpassword) {
      confirmpasswordError = (this.state.password != this.state.confirmpassword) ? 'Password and confirm password do not match' : null
    }
    else{
      confirmpasswordError = 'This field is required'
    }
    this.setState({
      passwordError: passwordError,
      confirmpasswordError: confirmpasswordError,
    })
    if (!passwordError && !oldpasswordError && !confirmpasswordError){
      var data = {
        userId: this.props.navigation.state.params.userId,
        password: this.state.password
      }
      fetch(api+'userdetail/ConfirmResetPassword', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseJson) => { 
        // alert(JSON.stringify(responseJson))
        if (responseJson.success) {
          this.props.navigation.navigate('Signin')
        }
        else{
          this.setState({ errorMsg: responseJson.message }); 
        }

        // alert(responseJson)
      })
      .catch((err) => { 
        alert(err); 
      });
    }
  }
  render () {
    const { navigate } = this.props.navigation;
      return (
        <View style={[Styles.backWhite]}>
          <View style={[Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft, Styles.row, Styles.flexRow, Styles.flexColumn]}>
            <View style={[Styles.mt55]}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth, Styles.mt55, Styles.flex, Styles.mb200]}>
              <Icon name={(this.state.lang == 'ar') ? "ios-arrow-round-forward" : "ios-arrow-round-back"} size={50} color="#051441" />
              <Text style={[Styles.latoBlack, Styles.font60, Styles.colorDarkBlue]}>{strings('reset_password.r_pass').toUpperCase()}</Text>
              <View style={[Styles.ml20]}></View>
            </View>
            <MainInput value={this.state.password} error={this.state.passwordError} label={strings('change_password.n_pass')} secure={this.state.secure1} placeholder={strings('signin.e_pass')} onChangeText={(value) => this.setState({password:value})} iconAction={true} actionPress={() => {this.setState({secure: !this.state.secure1})}} iconInput={true} icon={(this.state.secure1) ? 'eye' : 'eye-with-line'}/>
            <MainInput value={this.state.confirmpassword} error={this.state.confirmpasswordError} label={strings('change_password.con_pass')} secure={this.state.secure2} placeholder={strings('signin.e_pass')} onChangeText={(value) => this.setState({confirmpassword:value})} iconAction={true} actionPress={() => {this.setState({secure: !this.state.secure2})}} iconInput={true} icon={(this.state.secure2) ? 'eye' : 'eye-with-line'}/>
            </View>
            <View style={[Styles.fullWidth, Styles.bottomSelf]}>
            <MainButton title={strings('myprofile.s_changes').toUpperCase()} press={() => this.reset()} />
            </View>
          </View>
        </View>
      )
    }
}