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

export default class RedeemDetail extends Component {
  state = {
    isVisible: false,
    isVisible1: false
  }
	render () {
      const { params } = this.props.navigation.state;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: (params.type == 0) ? 'Select Air Miles Voucers' : 'Select Shopping Voucers', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
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
              <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>Vouchers List</Text>
              <View style={[Styles.smallBoxShadow, Styles.fullWidth, Styles.shadowStyle, Styles.centerItems, Styles.mb100, Styles.containerPadLeftSmall, Styles.containerPadRightSmall]}>
                <View style={[Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mt55, Styles.mb100]}>
                  <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.width30, Styles.voucherBack]}>
                    <Image source={require('../../assets/voucherLogo.png')} style={[Styles.maxwh, Styles.imageContain]} />
                  </View>
                  <View style={[Styles.width70, Styles.pl35, Styles.VerticalCenter, Styles.voucherBack]}>
                    <View style={[Styles.row, Styles.mb35]}>
                      <Text style={[Styles.colorExtraBlue, Styles.latoBold, Styles.font100]}>100</Text>
                      <Text style={[Styles.colorExtraBlue, Styles.latoBold, Styles.font30, Styles.bottomSelf, Styles.mb15]}>AED</Text>
                    </View>
                    <Text style={[Styles.latolight, Styles.font40]}>1000 points required to redeem</Text>

                  </View>
                </View>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font38, Styles.mb100, Styles.width65, Styles.centerText]}>Purchase at any Channel Outlet and receive a 15% discount.</Text>
                <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font30, Styles.mb100, Styles.width65, Styles.centerText]}>Redeemable at all Channel Outlets. Not Valid with any other discounts and promotions. Valid for outlet shopping only. No cash value.</Text>
                <Image source={require('../../assets/dotted.png')} style={[Styles.mb55, Styles.dotted]} />
                <Image source={require('../../assets/barCode.png')} style={[Styles.mb55, Styles.barCode, Styles.mt55]} />
                <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font38, Styles.mb100]}>No. 3652145899547884</Text>
                <View style={[Styles.row, Styles.flexRow, Styles.fullWidth, Styles.mb55]}>
                  <Image source={require('../../assets/voucherShare.png')} style={[Styles.voucherShare, Styles.hideDiv]} />
                  <Text style={[Styles.colorGray, Styles.font30, Styles.latoRegular]}>Valid until 20 April 2020</Text>
                  <Image source={require('../../assets/voucherHelp.png')} style={[Styles.voucherHelp, Styles.hideDiv]} />
                </View>
              </View>
              <View style={[Styles.fullWidth, Styles.mb100]}>
                <MainButton title={'redeem voucher'.toUpperCase()} press={() => this.setState({ isVisible: true })} />
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
              <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoBlack, Styles.mb35]}>Thank you for redeeming points</Text>
              <Text style={[Styles.latoRegular, Styles.font38, Styles.colorLightBlue, Styles.mb100]}>Thank you for redeeming your voucher. Your request if being process, we will inform you shorlty.</Text>
              <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth]}>
                <View></View>
                <View style={[Styles.width35]}>
                  <MainButton textSmall={true} title={'Yes, Thanks'.toUpperCase()} press={() =>  {this.setState({ isVisible1: false });}} />
                </View>
              </View>
            </View>
          </Modal>
        </View>
    	)
    }
}