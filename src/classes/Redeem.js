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
import {MainButton} from '../components/Buttons'
import {CompanyCard} from '../components/Card'

export default class Redeem extends Component {
	state = {
    active: 0
  }
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
            centerComponent={{ text: 'Redeem Your Points', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.fullWidth, Styles.centerItems, Styles.verticalCenter, Styles.row, Styles.flexRow, Styles.mt55, Styles.mb35]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoHeavy, Styles.font72]}>Hi, Faisal</Text>
                <Image source={require('../../assets/customerBadge.png')} style={[Styles.badgeIcon]} />
              </View>
              <View style={[Styles.backWhite, Styles.bigBoxShadow, Styles.pad45, {marginLeft: '2%', width: '96%'}, Styles.mb55]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font38, Styles.mb35]}>Available Points</Text>
                <View style={[Styles.fullWidth, Styles.row, Styles.mb35]}>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoBold]}>35,000</Text>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoLight, Styles.ml20]}>points</Text>
                </View>
                <Text style={[Styles.latoLight, Styles.font38, Styles.colorLightGray]}>Points will expire on 20 Nov 2020</Text>
              </View>
              <Text style={[Styles.latoRegular, Styles.font38, Styles.mb100, Styles.colorExtraBlue]}>Spend more 2,000 AED and upgrade to Gold membership.</Text>
              <View style={[Styles.fullWidth]}>
                <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>Vouchers</Text>
                <View style={[Styles.row, Styles.flexRow, Styles.mb55]}>
                  <View style={[Styles.width35]}>
                    <MainButton textSmall={true} title={'Redeem Air Miles'.toUpperCase()} press={() => this.setState({active: 0})} background={(this.state.active == 0) ? '#5f51fb' : '#c3c7d6'} />
                  </View>
                  <View style={[Styles.width35]}>
                    <MainButton textSmall={true} title={'shopping'.toUpperCase()} press={() => this.setState({active: 1})} background={(this.state.active == 1) ? '#5f51fb' : '#c3c7d6'} />
                  </View>
                  <View style={[Styles.width25]}>
                  </View>
                </View>
                <View style={[Styles.row, Styles.flexRow]}>
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company1.png')} />
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company2.png')} />
                </View>
                <View style={[Styles.row, Styles.flexRow]}>
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company3.png')} />
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company4.png')} />
                </View>
                <View style={[Styles.row, Styles.flexRow]}>
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company5.png')} />
                  <CompanyCard type="half" press={() => {navigate('RedeemList', {type: this.state.active})}}  image={require('../../assets/company6.png')} />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}