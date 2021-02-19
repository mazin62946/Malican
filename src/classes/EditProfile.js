import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  AsyncStorage,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import {MainButton} from '../components/Buttons'
import {MainInput, MainSelect, MainDateInput} from '../components/Input'
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardHeight from '../components/KeyboardHeight'
import { strings, lang } from '../locales/i18n';
import api from '../components/api'

var {height, width} = Dimensions.get('window');
height = height;
export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryCode: '',
      phone: '',
      title: '',
      firstname: '',
      surname: '',
      nationality: '',
      dob: '',
      nationalityData: [],
      phoneCodeData: false,
      lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
    }
    AsyncStorage.getItem('lang')
    .then((value) => {
      this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
    })
    this.getNationality()
    this.getPhoneCode()
  }
  /*state = {
    active: 0,
    code: '',
    height: height,
  }*/
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
  goBack(){
    return(

      <View>
      <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
      <Icon name={(this.state.lang == 'ar') ? "ios-arrow-round-forward" : "ios-arrow-round-back"} size={30} color="#fd5387" />
      </TouchableOpacity>
    </View>
    )
  }
	render () {
    const list = [
      {
        value: '',
        label: strings('signup.s_nationality')
      },
      {
        value: 'UAE',
        label: 'UAE'
      },
    ];
    const titlelist = [
      {
        value: '',
        label: strings('signup.s_title')
      },
      {
        value: 'Mr',
        label: 'Mr'
      },
      {
        value: 'Miss',
        label: 'Miss'
      },
      {
        value: 'Ms',
        label: 'Ms'
      },
      {
        value: 'Mrs',
        label: 'Mrs'
      },
    ]
    const list2 = [
      {
        value: '',
        label: strings('signup.s_code')
      },
      {
        value: '+92',
        label: '+92'
      },
    ]
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={this.goBack()}
            centerComponent={{ text: 'Edit Profile', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.backWhite,Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft, Styles.mt55, Styles.fullHeight]}>
            <View style={[Styles.row, Styles.flexRow, Styles.mt55]}>
              <View style={Styles.width45}>
                <MainSelect label={strings('signup.title')} small={true} data={titlelist} value={this.state.code} onChange={(value) => this.setState({code: value})} />
              </View>
              <View style={Styles.width50}>
                <MainInput label={strings('signup.f_name')} small={true} placeholder={strings('signup.e_fname')} onChangeText={(value) => console.log(value)} />
              </View>
            </View>
            <MainInput label={strings('signup.sname')} small={true} placeholder={strings('signup.e_sname')} onChangeText={(value) => console.log(value)} />
            <MainSelect label={strings('signup.nationality')} small={true} data={(this.state.nationalityData.length) ? this.state.nationalityData : list} value={this.state.code} onChange={(value) => this.setState({code: value})} />
            <View style={[Styles.row, Styles.flexRow]}>
              <View style={Styles.width45}>
                <MainSelect label={strings('signup.c_code')} small={true} data={(this.state.phoneCodeData.length) ? this.state.phoneCodeData : list2} value={this.state.code} onChange={(value) => this.setState({code: value})} />
              </View>
              <View style={Styles.width50}>
                <MainInput label={strings('signup.ph_num')} small={true} placeholder={strings('signup.e_phnum')} onChangeText={(value) => console.log(value)} />
              </View>
            </View>
            <MainDateInput label={strings('signup.dob')} iconInput={true} icon={'sort-down'} iconColor={'#79809b'} small={true} placeholder={'Select Date of Birth'} onChangeText={(value) => console.log(value)} />
            <View style={[Styles.fullWidth, Styles.bottomSelf]}>
              <MainButton title={strings('myprofile.s_changes').toUpperCase()} press={() => console.log('test')} />
            </View>
          </View>
        </View>
    	)
    }
}