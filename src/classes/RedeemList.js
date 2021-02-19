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
import {VoucherCard} from '../components/Card'
import Icon from 'react-native-vector-icons/Ionicons';

export default class RedeemList extends Component {
	render () {
      const { params } = this.props.navigation.state;
      const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: (params.type == 0) ? 'Select Air Miles Voucers' : 'Select Shopping Voucers', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
             <View style={[Styles.backWhite, Styles.fullWidth, Styles.smallBoxShadow, Styles.containerPadLeft, Styles.containerPadRight, Styles.height200, Styles.centerItems, Styles.verticalCenter, Styles.row, Styles.flexRow, Styles.mb55, Styles.shadowStyle]}>
              <View>
                <View style={[Styles.fullWidth, Styles.row, Styles.mb15]}>
                  <Text style={[Styles.colorDarkPink, Styles.font72, Styles.latoBold]}>35,000</Text>
                  <Text style={[Styles.colorDarkPink, Styles.font72, Styles.latoLight, Styles.ml20]}>points</Text>
                </View>
                <Text style={[Styles.latoLight, Styles.font38, Styles.colorLightGray]}>Points will expire on 20 Nov 2020</Text>
              </View>
              <Image source={require('../../assets/customerBadge.png')} style={[Styles.badgeIcon]} />
             </View>
             <View style={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight]}>
              <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>Vouchers List</Text>
              <VoucherCard image={require('../../assets/voucherLogo.png')} press={() => navigate('RedeemDetail', {type: params.type})} point={'1,000'} type='miles' detail='10,000 points required to redeem'/>
              <VoucherCard image={require('../../assets/voucherLogo.png')} press={() => navigate('RedeemDetail', {type: params.type})} point={'1,000'} type='miles' detail='10,000 points required to redeem'/>
              <VoucherCard image={require('../../assets/voucherLogo.png')} press={() => console.log('test')} point={'1,000'} type='miles' detail='10,000 points required to redeem' disable={true}/>
              <VoucherCard image={require('../../assets/voucherLogo.png')} press={() => console.log('test')} point={'1,000'} type='miles' detail='10,000 points required to redeem' disable={true}/>
             </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}