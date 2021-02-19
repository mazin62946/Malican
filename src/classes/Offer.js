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
import {OffersListCard} from '../components/Card'

export default class Offer extends Component {
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
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={this.openDrawer()}
            centerComponent={{ text: 'Offers', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.row, Styles.flexRow, Styles.mb55, Styles.mt55]}>
                <View style={[Styles.widthThird]}>
                  <MainButton textSmall={true} title={'all'.toUpperCase()} press={() => this.setState({active: 0})} background={(this.state.active == 0) ? '#5f51fb' : '#c3c7d6'} />
                </View>
                <View style={[Styles.widthThird]}>
                  <MainButton textSmall={true} title={'carrefour'.toUpperCase()} press={() => this.setState({active: 1})} background={(this.state.active == 1) ? '#5f51fb' : '#c3c7d6'} />
                </View>
                <View style={[Styles.widthThird]}>
                  <MainButton textSmall={true} title={'activated'.toUpperCase()} press={() => this.setState({active: 2})} background={(this.state.active == 2) ? '#5f51fb' : '#c3c7d6'} />
                </View>
              </View>
              <View style={[Styles.pb50]}>
              <OffersListCard image={require('../../assets/offerListImage.png')} expire={'Expires in 7 days'} title="Get 20% off all products at Giordano" description="Visit our Mall of the Emirates branch and get 15% discount by presenting us your Malican app." start="13/02/2020" end="23/02/2020" press={() => this.props.navigation.navigate('OfferDetail') }/>
              <OffersListCard image={require('../../assets/offerListImage.png')} expire={'Expires in 7 days'} title="Get 20% off all products at Giordano" description="Visit our Mall of the Emirates branch and get 15% discount by presenting us your Malican app." start="13/02/2020" end="23/02/2020" press={() => this.props.navigation.navigate('OfferDetail') }/>
              <OffersListCard image={require('../../assets/offerListImage.png')} expire={'Expires in 7 days'} title="Get 20% off all products at Giordano" description="Visit our Mall of the Emirates branch and get 15% discount by presenting us your Malican app." start="13/02/2020" end="23/02/2020" press={() => this.props.navigation.navigate('OfferDetail') }/>
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}