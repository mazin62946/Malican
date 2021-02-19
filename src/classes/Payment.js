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
export default class Payment extends Component {
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
            centerComponent={{ text: 'Payment Methods', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.mt55, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
              <TouchableWithoutFeedback onPress={() => {navigate('AddCard')}}>
              <View style={[Styles.mt55, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow]}>
                <View style={[Styles.row, Styles.VerticalCenter, Styles.centerItems]}>
                  <Image source={require('../../assets/creditCardIcon.png')} style={[Styles.creditCardIcon]} />
                  <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font48, Styles.ml40]}>Add a credit or debit card</Text>
                </View>
                <Icon name="chevron-right" size={25} color="#c3c7d6" />
              </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </View>
        </View>
    	)
    }
}