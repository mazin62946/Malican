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

export default class ChangePassword extends Component {
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
            centerComponent={{ text: 'Change Password', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth, {height: '90%'}, Styles.containerPadRight, Styles.containerPadLeft, Styles.row, Styles.flexRow, Styles.flexColumn]}>
            <View style={[Styles.mt55]}>
            <MainInput label={'Old Password'} secure="true" placeholder={'Enter password'} onChangeText={(value) => console.log(value)} iconInput={true} icon={'eye'}/>
            <MainInput label={'New Password'} secure="true" placeholder={'Enter password'} onChangeText={(value) => console.log(value)} iconInput={true} icon={'eye'}/>
            <MainInput label={'Confirm New Password'} secure="true" placeholder={'Enter password'} onChangeText={(value) => console.log(value)} iconInput={true} icon={'eye'}/>
            </View>
            <View style={[Styles.fullWidth, Styles.bottomSelf]}>
            <MainButton title={'save changes'.toUpperCase()} press={() => console.log('test')} />
            </View>
          </View>
        </View>
    	)
    }
}