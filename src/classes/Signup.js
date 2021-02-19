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
  KeyboardAvoidingView,
  Platform,
  AsyncStorage
} from 'react-native'
import Styles from '../styles/style'
import { Button } from 'react-native-elements'
import {MainButton} from '../components/Buttons'


import KeyboardHeight from '../components/KeyboardHeight'

import api from '../components/api'


var {height, width} = Dimensions.get('window');
height = height;
import { strings, lang } from '../locales/i18n';

import Step1 from '../components/signup/Step1'
import Step2 from '../components/signup/Step2'
import Step3 from '../components/signup/Step3'
import Step4 from '../components/signup/Step4'
import validate from '../validation/Signup'


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 4,
      currentStep: 1,
      email: '',
      countryCode: '',
      phone: '',
      title: '',
      firstname: '',
      surname: '',
      nationality: '',
      dob: '',
      password: '',
      confirmpassword: '',
      passAccept: false,
      terms: false,
      nationalityData: [],
      phoneCodeData: false
    }
    AsyncStorage.getItem('access_token')
    .then((value) => {
      if (value) {
          this.props.navigation.navigate('Home')
      }
    })
    this.getNationality()
    this.getPhoneCode()
  }
  renderStep(){
    data = []
    for (var i = 0; i < this.state.steps; i++) {
      data.push(
        <View key={i} style={[Styles.singupStep, Styles.centerItems, Styles.VerticalCenter, (i != 0) ? Styles.ml70 : {}, (this.state.currentStep == (i + 1)) ? Styles.singupStepCurrent : {}, (this.state.currentStep > (i + 1)) ? Styles.singupStepDone : {}]}>
          <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font38]}>{i + 1}</Text>
        </View>
      )
    }
    return data
  }
  getNationality(){
    let header = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    fetch(api+'Register/GetNationality', {
        method: 'GET',
        headers: header,
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.success) {
          //alert(responseJson.data)
          // var data = JSON.stringify(responseJson.data)
          // // alert(JSON.parse(data))
          // var data = JSON.parse(data)
          this.setState({nationalityData:responseJson.data})
          // alert(data[0].label)
        }
        // var data = JSON.parse(responseJson.data)
        // alert(responseJson.success)
    })
    .catch((error) => {
        console.error(error);
    });
  }
  getPhoneCode(){
    let header = { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    fetch(api+'Register/GetCountryCode', {
        method: 'GET',
        headers: header,
    })
    .then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.success) {
          //alert(responseJson.data)
          // var data = JSON.stringify(responseJson.data)
          // // alert(JSON.parse(data))
          // var data = JSON.parse(data)
          this.setState({phoneCodeData:responseJson.data})
          // alert(data[0].label)
        }
        // var data = JSON.parse(responseJson.data)
        // alert(responseJson.success)
    })
    .catch((error) => {
        console.error(error);
    });
  }
  changeStep(){
    valid = true;
    if (this.state.currentStep == 1) {
      var emailError = null;
      var phoneError = null;
      var countryCodeError = null;
      if (this.state.email) {

        emailError = validate('email', this.state.email)
      }
      else{
        emailError = 'This field is required'
      }
      if (this.state.phone) {
        phoneError = validate('phone', this.state.phone)
      }
      else{
        phoneError = 'This field is required'
      }
      if (!this.state.countryCode) {
        countryCodeError = 'This field is required'
      }
      if (emailError || phoneError || countryCodeError) {
        this.setState({
          phoneError: phoneError,
          emailError: emailError,
          countryCodeError: countryCodeError
        })
        valid = false
      }
      else{
        emailError = null;
        phoneError = null;
        countryCodeError = null;
        this.setState({
          phoneError: phoneError,
          emailError: emailError,
          countryCodeError: countryCodeError
        })
      }
    }

    if (this.state.currentStep == 2) {
      var firstnameError = null;
      var surnameError = null;
      if (!this.state.firstname) {
        firstnameError = 'This field is required'
      }
      if (!this.state.surname) {
        surnameError = 'This field is required'
      }
      if (!this.state.title) {
        titleError = 'This field is required'
      }
      if (!this.state.nationality) {
        nationalityError = 'This field is required'
      }
      if (firstnameError || surnameError) {
        this.setState({
          surnameError: surnameError,
          firstnameError: firstnameError,
          titleError: titleError,
          nationalityError: nationalityError
        })
        valid = false
      }
      else{
        firstnameError = null;
        surnameError = null;
        titleError = null;
        nationalityError = null;
        this.setState({
          surnameError: surnameError,
          firstnameError: firstnameError,
          titleError: titleError,
          nationalityError: nationalityError
        })
      }
    }
    if (this.state.currentStep == 4) {
      var passwordError = null;
      var confirmpasswordError = null;
      var termsError = null;
      if (!this.state.password) {
        passwordError = 'This field is required'
      }
      if (!this.state.terms) {
        termsError = 'This field is required'
      }
      if (this.state.confirmpassword) {
        confirmpasswordError = (this.state.password != this.state.confirmpassword) ? 'Password and confirm password do not match' : null
      }
      else{
        confirmpasswordError = 'This field is required'
      }
      if (passwordError || confirmpasswordError || !this.state.passAccept || termsError) {
        this.setState({
          termsError: termsError,
          passwordError: passwordError,
          confirmpasswordError: confirmpasswordError,
        })
        valid = false
        // alert(this.state.passAccept)
        // alert('testing')
      }
      else{
        termsError = null;
        passwordError = null;
        confirmpasswordError = null;
        this.setState({
          termsError: termsError,
          passwordError: passwordError,
          confirmpasswordError: confirmpasswordError,
        })
      }
    }
    if (valid) {
      if (this.state.currentStep == this.state.steps) {
        //alert('test')
        // this.props.navigation.navigate('Confirmation')
        var data = {
          email:this.state.email, 
          countryCode: this.state.countryCode,
          phone: this.state.phone,
          title: this.state.title, 
          firstname: this.state.firstname, 
          surname: this.state.surname, 
          nationality: this.state.nationality,
          dob: this.state.dob,
          password: this.state.password,
          confirmpassword: this.state.confirmpassword
        }
        fetch(api+'Register/Register', {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((responseJson) => { 
          alert(JSON.stringify(responseJson))
          if (responseJson.success) {
            this.props.navigation.navigate('Confirmation', {userId: responseJson.data, code: this.state.countryCode, phone: this.state.phone})
          }
          else{
            if (responseJson.MessageType == 4) {
              emailError = 'Email already exists'
              this.setState({emailError: emailError})
              this.setState({currentStep: 1})
            }

            if (responseJson.MessageType == 5) {
              phoneError = 'Phone number already exists'
              this.setState({phoneError: phoneError})
              this.setState({currentStep: 1})
            }
            // alert(responseJson.success)
          }
        })
        .catch((err) => { 
          alert(err); 
        });


      }
      else{
        this.setState({currentStep: this.state.currentStep + 1})
      }
    }
  }
	render () {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
  	return (
  		<View style={[Styles.fullWidth]}>
        
        <ScrollView contentContainerStyle={[Styles.centerItems, Styles.fullWidth]} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            behavior='position' keyboardVerticalOffset={keyboardVerticalOffset} style={[Styles.fullWidth]}
          >
            <View style={[Styles.fullWidth, Styles.centerItems]}>
              <Text style={[Styles.mt55, Styles.latoBlack, Styles.font60, Styles.colorDarkBlue]}>{strings('signup.s_up').toUpperCase()}</Text>
              <View style={[Styles.centerItems, Styles.mt55, Styles.row, Styles.mb200]}>
                <Image style={Styles.stepsBorder} source={require('../../assets/stepsborder.png')} />
                {this.renderStep()}
              </View>

              {(this.state.currentStep == 1) ? <Step1 email={this.state.email} phone={this.state.phone} countryCode={this.state.countryCode} emailError={this.state.emailError} countryCodeData={this.state.phoneCodeData} countryCodeError={this.state.countryCodeError}  phoneError={this.state.phoneError} emailChange={(email) => {this.setState({email: email})}} phoneChange={(phone) => {this.setState({phone: phone})}} countryChange={(country) => {this.setState({countryCode: country})}}  /> : null}
              {(this.state.currentStep == 2) ? <Step2 title={this.state.title} firstname={this.state.firstname} surname={this.state.surname} nationality={this.state.nationality} nationalityData={this.state.nationalityData} firstnameError={this.state.firstnameError}  surnameError={this.state.surnameError} titleError={this.state.titleError}  nationalityError={this.state.nationalityError} firstnameChange={(firstname) => {this.setState({firstname: firstname})}} surnameChange={(surname) => {this.setState({surname: surname})}} titleChange={(title) => {this.setState({title: title})}} nationalityChange={(nationality) => {this.setState({nationality: nationality})}} /> : null}
              {(this.state.currentStep == 3) ? <Step3 dob={this.state.dob} dateChange={(date) => this.setState({dob:date})} /> : null}
              {(this.state.currentStep == 4) ? <Step4 password={this.state.password} confirmpassword={this.state.confirmpassword} terms={this.state.terms} passwordError={this.state.passwordError} termsError={this.state.termsError} confirmpasswordError={this.state.confirmpasswordError} passwordChange={(password) => {this.setState({password: password})}} confirmpasswordChange={(confirmpassword) => {this.setState({confirmpassword: confirmpassword})}} acceptPassword={(value) => {this.setState({passAccept: value})}} termsChange={() => this.setState({terms: !this.state.terms})} /> : null}
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth, Styles.mb55]}>
                <MainButton title={strings('signup.next').toUpperCase()} press={() => this.changeStep()} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
  	)
  }
}