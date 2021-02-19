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
  Dimensions
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import {MainButton} from '../components/Buttons'
import Icon from 'react-native-vector-icons/Ionicons';
import {MainInput} from '../components/Input'

export default class EditProfile extends Component {
  
	render () {
    const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: 'Add New Member', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.backWhite,Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft, Styles.mt55, Styles.fullHeight]}>
            <Text style={[Styles.mt55, Styles.latoRegular, Styles.font48, Styles.colorDarkBlue, Styles.mb100]}>Add a new member into you Family Group by entering theri email address.</Text>
            <MainInput label={'Email Address'} small={true} placeholder={'Enter email address'} onChangeText={(value) => console.log(value)} />
            <MainButton title={'send invite'.toUpperCase()} press={() => navigate('GroupList')} />
          </View>
        </View>
    	)
    }
}