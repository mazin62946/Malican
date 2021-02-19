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

export default class GroupList extends Component {
  
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
          <View style={[Styles.backWhite,Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft, Styles.mt55, {height: '88%'}, Styles.row, Styles.flexRow, Styles.flexColumn]}>
            <View style={[Styles.mt55]}>
              <View style={[Styles.centerItems, Styles.fullWidth, Styles.row, Styles.mb55, ]}>
                <Image source={require('../../assets/profilePic.png')} style={[Styles.profilePic]} />
                <View style={[Styles.ml40]}>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Title Name</Text>
                  <Text style={[Styles.colorBlue, Styles.latoRegular, Styles.font30]}>emailaddress@domain.com</Text>
                </View>
              </View>
              <View style={[Styles.centerItems, Styles.fullWidth, Styles.row, Styles.mt55, Styles.mb55, ]}>
                <Image source={require('../../assets/profilePic.png')} style={[Styles.profilePic]} />
                <View style={[Styles.ml40]}>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Title Name</Text>
                  <Text style={[Styles.colorBlue, Styles.latoRegular, Styles.font30]}>emailaddress@domain.com</Text>
                </View>
              </View>
              <View style={[Styles.centerItems, Styles.fullWidth, Styles.row, Styles.mt55, Styles.mb55, ]}>
                <Image source={require('../../assets/profilePic.png')} style={[Styles.profilePic]} />
                <View style={[Styles.ml40]}>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Title Name</Text>
                  <Text style={[Styles.colorBlue, Styles.latoRegular, Styles.font30]}>emailaddress@domain.com</Text>
                </View>
              </View>
            </View>
            <View style={[Styles.fullWidth, Styles.mb100]}>
            <MainButton title={'invite member'.toUpperCase()} press={() => navigate('AddMember')} />
            </View>
          </View>
        </View>
    	)
    }
}