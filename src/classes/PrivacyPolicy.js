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

export default class PrivacyPolicy extends Component {
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
            centerComponent={{ text: 'Privacy Policy', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}, Styles.containerPadRight, Styles.containerPadLeft]} showsVerticalScrollIndicator={false}>
                <View style={[Styles.flexColumn, Styles.mb55, Styles.mt55]}>

                    <View style={[Styles.flexColumn]}>
                        <View style={[Styles.row, Styles.mb72]}> 
                            <Text style={[Styles.latoBold, Styles.font48]}>1.0</Text>
                            <Text style={[Styles.latoBold, Styles.font48, Styles.ml40]}>Recital</Text>
                        </View>

                        <View style={[Styles.mb100]}>
                            <Text style={[Styles.latoRegular,Styles.font36, Styles.colorBlue]}>
                            Pellentesque massa odio, lacinia ut maximus a, maximus sed tortor. Sed rhoncus, 
                            ipsum vel sagittis lacinia, nisl lorem commodo nisl, eu sagittis elit augue in ipsum. 
                            Aenean lobortis libero eget neque eleifend rhoncus. Praesent facilisis est in urna porttitor, 
                            sed aliquam nisl cursus. Aliquam nec ex sit amet mi vulputate malesuada. Curabitur erat arcu, 
                            porta non elit sit amet, euismod consequat orci. Sed eget cursus arcu, quis euismod ligula. 
                            </Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72]}> 
                            <Text style={[Styles.latoBold, Styles.font48]}>2.0</Text>
                            <Text style={[Styles.latoBold, Styles.font48, Styles.ml40]}>Definition</Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72]}>
                            <Text style={[Styles.latoRegular, Styles.font36, Styles.colorBlue]}>1.</Text>
                            <Text style={[Styles.latoRegular, Styles.font36, Styles.ml40, Styles.colorBlue]}>The following binding definitions shall apply:</Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72, Styles.leftContent, Styles.ml85]}>
                                <View style={[Styles.sliderButtonSelected, Styles.liBullet, Styles.mt5]}>
                                   
                                </View>
                                <Text style={[Styles.latoRegular, Styles.font36,Styles.ml40, Styles.colorBlue]}>
                                    Phasellus vulputate justo eget dolor eleifend, et varius nisl dapibus. 
                                    Aenean commodo eget mi a posuere. Nam quis arcu placerat, tincidunt mi ut, finibus ex.
                                </Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72, Styles.leftContent, Styles.ml85]}>
                                <View style={[Styles.sliderButtonSelected, Styles.liBullet, Styles.mt5]}>
                                   
                                </View>
                                <Text style={[Styles.latoRegular, Styles.font36,Styles.ml40, Styles.colorBlue]}>
                                    Phasellus vulputate justo eget dolor eleifend, et varius nisl dapibus. 
                                    Aenean commodo eget mi a posuere. Nam quis arcu placerat, tincidunt mi ut, finibus ex.
                                </Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72, Styles.leftContent, Styles.ml85]}>
                                <View style={[Styles.sliderButtonSelected, Styles.liBullet, Styles.mt5]}>
                                   
                                </View>
                                <Text style={[Styles.latoRegular, Styles.font36,Styles.ml40, Styles.colorBlue]}>
                                    Phasellus vulputate justo eget dolor eleifend, et varius nisl dapibus. 
                                    Aenean commodo eget mi a posuere. Nam quis arcu placerat, tincidunt mi ut, finibus ex.
                                </Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72, Styles.leftContent, Styles.ml85]}>
                                <View style={[Styles.sliderButtonSelected, Styles.liBullet, Styles.mt5]}>
                                   
                                </View>
                                <Text style={[Styles.latoRegular, Styles.font36,Styles.ml40, Styles.colorBlue]}>
                                    Phasellus vulputate justo eget dolor eleifend, et varius nisl dapibus. 
                                    Aenean commodo eget mi a posuere. Nam quis arcu placerat, tincidunt mi ut, finibus ex.
                                </Text>
                        </View>

                        <View style={[Styles.row, Styles.mb72, Styles.leftContent, Styles.ml85]}>
                                <View style={[Styles.sliderButtonSelected, Styles.liBullet, Styles.mt5]}>
                                   
                                </View>
                                <Text style={[Styles.latoRegular, Styles.font36,Styles.ml40, Styles.colorBlue]}>
                                    Phasellus vulputate justo eget dolor eleifend, et varius nisl dapibus. 
                                    Aenean commodo eget mi a posuere. Nam quis arcu placerat, tincidunt mi ut, finibus ex.
                                </Text>
                        </View>
                        

                    </View>

                </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}