import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  ImageBackground
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import {MainButton} from '../components/Buttons'
import {OffersListCard} from '../components/Card'
import Icon from 'react-native-vector-icons/Ionicons';
import helpers from '../components/Resize'
import Icon1 from 'react-native-vector-icons/Entypo';

export default class OfferDetail extends Component {
  state = {
    active: 0
  }
	render () {
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: 'Discount Offer', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
              <ImageBackground source={require('../../assets/offerListImage.png')} style={[Styles.fullWidth, Styles.offerListImage, Styles.VerticalBottom, Styles.containerPadRight, Styles.containerPadLeft, Styles.mb100]} >
                <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth, Styles.mb55]}>
                  <Text style={[Styles.latoBold, Styles.font24, Styles.colorWhite, Styles.sliderButtonSelected, Styles.pad20, Styles.radius3]}>Expires in 7 days</Text>
                  <View style={[Styles.row]}>
                    <Icon1 name="share" style={[Styles.pad20, Styles.buttonBackground, Styles.pt10, Styles.pb10, Styles.radius3]} size={helpers.Size('1125',40)} color="#fff" />
                    <Icon1 name="share" style={[Styles.pad20, Styles.ml20, Styles.buttonBackground, Styles.pt10, Styles.pb10, Styles.radius3]} size={helpers.Size('1125',40)} color="#fff" />
                  </View>
                </View>
              </ImageBackground>
              <View style={[Styles.fullWidth, Styles.containerPadRight, Styles.containerPadLeft]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48, Styles.mb35]}>Enjoy 15% discount at Eat Greek</Text>
                <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font30, Styles.mb100]}>Starts: 13/02/2020      |      Ends: 23/02/2020</Text>
                <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font38, Styles.mb55]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget imperdiet nunc, sit amet efficitur felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Suspendisse consectetur egestas molestie.</Text>
                <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font38, Styles.mb55]}>Nunc sem lorem, ullamcorper eget lobortis nec, placerat vel arcu. Al Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget imperdiet nunc, sit amet efficitur felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi. Suspendisse consectetur egestas molestie. Nunc sem lorem, ullamcorper eget lobortis nec, placerat vel arcu. Aliquam malesuada massa sollicitudin nisl tristique tempor. Fusce eget cursus lacus.</Text>
                <View style={[Styles.fullWidth, Styles.row, Styles.mt55, Styles.mb100]}>
                  <Image source={require('../../assets/locationIcon.png')} style={[Styles.locationIcon]} />
                  <View style={[Styles.ml40]}>
                    <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48, Styles.mb15]}>Eat Greek</Text>
                    <Text style={[Styles.colorDBlue, Styles.latoRegular, Styles.font38]}>Sheikh Zayed Rd  -  Dubai</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}