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
import Icon from 'react-native-vector-icons/AntDesign';
export default class PaymentList extends Component {
  openDrawer(){
    return(

      <View>
      <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
      <Image source={require('../../assets/menuIcon.png')} style={Styles.menuIcon} />
      </TouchableOpacity>
    </View>
    )
  }
  addCard(){
    return(
      <View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddCard'); }}>
        <Image source={require('../../assets/cardAdd.png')} style={Styles.creditCardIcon} />
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
            rightComponent={this.addCard()}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.mt55, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.mt55, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.mb55]}>
                <View>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Faisal Afzal</Text>
                  <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font36]}>2541 3652 6985 5874</Text>
                </View>
                <Icon name="closecircleo" size={25} color="#c3c7d6" />
              </View>
              <View style={[Styles.mt55, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.mb55]}>
                <View>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Faisal Afzal</Text>
                  <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font36]}>2541 3652 6985 5874</Text>
                </View>
                <Icon name="closecircleo" size={25} color="#c3c7d6" />
              </View>
              <View style={[Styles.mt55, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.mb55]}>
                <View>
                  <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48]}>Faisal Afzal</Text>
                  <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font36]}>2541 3652 6985 5874</Text>
                </View>
                <Icon name="closecircleo" size={25} color="#c3c7d6" />
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}