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
import Modal from "react-native-modal";

export default class ServiceDetail extends Component {
  state = {
    isVisible: false,
    isVisible1: false
  }
	render () {
    //   const { params } = this.props.navigation.state;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: 'Valet Parking', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
             <View style={[Styles.fullWidth, Styles.smallBoxShadow, Styles.containerPadLeft, Styles.containerPadRight, Styles.height200, Styles.centerItems, Styles.verticalCenter, Styles.row, Styles.flexRow, Styles.mb55, Styles.shadowStyle]}>
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
              <View style={[Styles.smallBoxShadow2, Styles.fullWidth, Styles.shadowStyle, Styles.centerItems, Styles.mb100, Styles.containerPadLeftSmall, Styles.containerPadRightSmall]}>
                <View style={[Styles.fullWidth, Styles.mt55, Styles.mb100]}>
                  <View style={[Styles.centerItems, Styles.flexColumn, Styles.VerticalCenter]}>
                    <Image source={require('../../assets/valet.png')} style={[ Styles.imageContain,Styles.serviceDetailIcon, Styles.mb80]} />
                    <Text style={[Styles.latoBold, Styles.font60, Styles.mb50]}>Valet Parking</Text>
                  
                    <View style={[Styles.row]}>
                    <Text style={[Styles.latoBold, Styles.font36, Styles.countblue]}>01 </Text>
                    <Text style={[Styles.latoBold, Styles.font36, Styles.colorGray]}> of </Text>
                    <Text style={[Styles.latoBold, Styles.font36]}> 03</Text>
                    </View>
                 

                  </View>
                </View>
                <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font30, Styles.mb100, Styles.width65, Styles.centerText]}>Redeemable at all Channel Outlets. Not Valid with any other discounts and promotions. Valid for outlet shopping only. No cash value.</Text>
                <Image source={require('../../assets/dotted.png')} style={[Styles.mb55, Styles.dotted]} />
                <Image source={require('../../assets/barCode.png')} style={[Styles.mb55, Styles.barCode, Styles.mt55]} />
                <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font38, Styles.mb100]}>No. 3652145899547884</Text>
                <View style={[Styles.row, Styles.flexRow, Styles.fullWidth]}>
                  <Image source={require('../../assets/voucherShare.png')} style={[Styles.voucherShare, Styles.hideDiv]} />
                  <Image source={require('../../assets/voucherHelp.png')} style={[Styles.voucherHelp, Styles.hideDiv]} />
                </View>
              </View>
              <View style={[Styles.fullWidth, Styles.verticalCenter, Styles.centerItems]}>
                  <Text style={[Styles.countblue, Styles.latoRegular, Styles.font36,Styles.centerText]}>
                  Spend more 2,000 AED and upgrade to Gold membership
                    to get 10 free valet parking vouchers
                  </Text>
               
              </View>
             </View>
            </ScrollView>
          </View>
          <Modal
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
            // backdropColor="transparent"
            style={[Styles.backWhite, Styles.redeemModal]}
          >
            <View style={[Styles.fullWidth, Styles.fullHeight, Styles.containerPadLeft, Styles.containerPadRight, Styles.VerticalCenter]}>
              <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoBlack, Styles.mb55]}>Redeem Your Points</Text>
              <Text style={[Styles.latoRegular, Styles.font38, Styles.colorLightBlue, Styles.mb100]}>Are you sure you want to redeem 10,000 points for this voucher?</Text>
              <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth]}>
                <TouchableWithoutFeedback onPress={() => this.setState({ isVisible: false })}>
                  <Text style={[Styles.latoBold, Styles.font38, Styles.colorDarkPink]}>{'cancel'.toUpperCase()}</Text>
                </TouchableWithoutFeedback>
                <View style={[Styles.width35]}>
                  <MainButton textSmall={true} title={'Yes, redeem'.toUpperCase()} press={() =>  {this.setState({ isVisible: false }); this.setState({ isVisible1: true });}} />
                </View>
              </View>
            </View>
          </Modal>


          <Modal
            isVisible={this.state.isVisible1}
            onBackdropPress={() => this.setState({ isVisible1: false })}
            // backdropColor="transparent"
            style={[Styles.backWhite, Styles.redeemModal]}
          >
            <View style={[Styles.fullWidth, Styles.fullHeight, Styles.containerPadLeft, Styles.containerPadRight, Styles.VerticalCenter]}>
              <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoBlack, Styles.mb35]}>Thank you</Text>
              <Text style={[Styles.latoRegular, Styles.font38, Styles.colorLightBlue, Styles.mb100]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in euismod massa.
                  </Text>
              <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth]}>
                <View></View>
                <View style={[Styles.width35]}>
                  <MainButton textSmall={true} title={'Yes, Thanks'.toUpperCase()} 
                  press={() =>  {this.setState({ isVisible1: false });}} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
    	)
    }
}