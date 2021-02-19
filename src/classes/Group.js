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

export default class Group extends Component {
  
	render () {
    const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: 'My Family Group', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.backWhite,Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft, Styles.mt55, {height: '90%'}, Styles.centerItems, Styles.VerticalCenter]}>
            <Image source={require('../../assets/GroupListIcon.png')} style={[Styles.groupListIcon, Styles.mb100]} />
            <Text style={[Styles.latoBold, Styles.font48, Styles.colorDarkBlue, Styles.width70, Styles.centerText, Styles.mb100]}>Invite up to 9 members to join your Family Group.</Text>
            <View style={[Styles.fullWidth, Styles.mb100]}>
            <MainButton title={'invite member'.toUpperCase()} press={() => navigate('AddMember')} />
            </View>
          </View>
        </View>
    	)
    }
}