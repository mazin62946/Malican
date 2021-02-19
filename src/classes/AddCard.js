import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import {MainInput, MainSelect, MainDateInput} from '../components/Input'
import {MainButton} from '../components/Buttons'
import helpers from '../components/Resize'
const {width, height} = Dimensions.get('window');

export default class AddCard extends Component {
  
	render () {
    const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.backWhite]}>
          <Header
            leftComponent={<Icon name="ios-arrow-round-back" size={30} color="#fd5387" />}
            centerComponent={{ text: 'Add Card Details', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: height - helpers.Size('1125', 200)}, Styles.mt55]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.flexRow, Styles.flex, Styles.flexColumn, Styles.fullWidth, Styles.fullHeight, {height: height - helpers.Size('1125', 325)}]}>
                <View style={[Styles.fullWidth, Styles.mt55, Styles.containerPadRight, Styles.containerPadLeft]}>
                  <MainInput label={'Card Number'} small={true} placeholder={'Enter Card Number'} onChangeText={(value) => console.log(value)} />
                  <MainInput label={'Title on Card'} small={true} placeholder={'Enter Title on Card'} onChangeText={(value) => console.log(value)} />
                  <View style={[Styles.row, Styles.flexRow]}>
                    <View style={Styles.width45}>
                      <MainInput label={'Expiry'} small={true} placeholder={'Enter Expiry'} onChangeText={(value) => console.log(value)} />
                    </View>
                    <View style={Styles.width50}>
                      <MainInput label={'CVV'} small={true} placeholder={'Enter CVV'} onChangeText={(value) => console.log(value)} />
                    </View>
                  </View>
                  <MainButton title={'save card'.toUpperCase()} press={() => navigate('PaymentList')} />
                </View>
                <View style={[Styles.sliderButtonSelected, Styles.fullWidth, Styles.scanBox]}>
                  <View style={[Styles.row, Styles.fullHeight, Styles.VerticalCenter, Styles.centerItems]}>
                    <View style={[Styles.backWhite, Styles.cameraIconBox, Styles.centerItems, Styles.VerticalCenter]}>
                      <Image source={require('../../assets/cameraIcon.png')} style={[Styles.cameraIcon]} />
                    </View>
                    <View style={[Styles.ml40]}>
                      <Text style={[Styles.colorWhite, Styles.font48, Styles.latoRegular, Styles.mb35]}>Why type when you can scan?</Text>
                      <Text style={[Styles.colorWhite, Styles.font72, Styles.latoBlack]}>{'scan card now'.toUpperCase()}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}