import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';
import {MainInput, MainSelect, MainDateInput} from '../components/Input'
import {MainButton} from '../components/Buttons'

export default class ResetPassword extends Component {
  openDrawer(){
    return(

      <View>
      <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
      <Image source={require('../../assets/menuIcon.png')} style={Styles.menuIcon} />
      </TouchableOpacity>
    </View>
    )
  }
	render () {
    const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={this.openDrawer()}
            centerComponent={{ text: 'Reset Password', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.mt55, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.mt55]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font48, Styles.mb100]}>Enter your email to reset your password.</Text>
                <MainInput label={'Email Address'} small={true} placeholder={'Enter email address'} onChangeText={(value) => console.log(value)} />
                <MainButton title={'reset password'.toUpperCase()} press={() => console.log('test')} />
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}