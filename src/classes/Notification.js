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
import {MainButton} from '../components/Buttons'

export default class Notification extends Component {
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
            centerComponent={{ text: 'Notifications', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
            backgroundColor="transparent"
            containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
          />
          <View style={[Styles.fullWidth]}>
            <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
              <View style={[Styles.mt55, Styles.containerPadRight, Styles.containerPadLeft, Styles.removeDiv]}>
                <Text style={[Styles.colorBlue, Styles.latoRegular, Styles.font38, Styles.mt55]}>To modify the notifications preferences for this application, please go to your phone settings.</Text>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.containerPadTop, Styles.containerPadBottom, Styles.mainInput, Styles.row]}>
                <View style={[Styles.notifyBox, Styles.centerItems, Styles.VerticalCenter]}>
                  <Image source={require('../../assets/notifyIcon.png')} style={[Styles.notifyIcon]} />
                </View>
                <View style={[Styles.ml40, Styles.containerPadRight]}>
                  <Text style={[Styles.colorDarkPink, Styles.latoBold, Styles.font24, Styles.mb25]}>{'Title'.toUpperCase()}</Text>
                  <Text style={[Styles.colorBlue, Styles.font30, Styles.latoRegular, Styles.mb25]}>Diam sit amet nisl suscipit. Scelerisque viverra mauris in aliquam sem. Nunc sed augue lacus viverra vitae.</Text>
                  <View style={[Styles.width50]}>
                    <MainButton textSmall={true} title={'Redeem Air Miles'.toUpperCase()} press={() => this.setState({active: 0})} />
                  </View>
                </View>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.containerPadTop, Styles.containerPadBottom, Styles.mainInput, Styles.row]}>
                <View style={[Styles.notifyBox, Styles.centerItems, Styles.VerticalCenter]}>
                  <Image source={require('../../assets/notifyIcon.png')} style={[Styles.notifyIcon]} />
                </View>
                <View style={[Styles.ml40, Styles.containerPadRight]}>
                  <Text style={[Styles.colorDarkPink, Styles.latoBold, Styles.font24, Styles.mb25]}>{'Title'.toUpperCase()}</Text>
                  <Text style={[Styles.colorBlue, Styles.font30, Styles.latoRegular]}>Diam sit amet nisl suscipit. Scelerisque viverra mauris in aliquam sem. Nunc sed augue lacus viverra vitae.</Text>
                </View>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.containerPadTop, Styles.containerPadBottom, Styles.mainInput, Styles.row, Styles.buttonBackground]}>
                <View style={[Styles.notifyBox, Styles.centerItems, Styles.VerticalCenter, Styles.backWhite]}>
                  <Image source={require('../../assets/notifyIcon.png')} style={[Styles.notifyIcon]} />
                </View>
                <View style={[Styles.ml40, Styles.containerPadRight]}>
                  <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font24, Styles.mb25]}>{'Title'.toUpperCase()}</Text>
                  <Text style={[Styles.colorWhite, Styles.font30, Styles.latoRegular, Styles.mb25]}>Diam sit amet nisl suscipit. Scelerisque viverra mauris in aliquam sem. Nunc sed augue lacus viverra vitae.</Text>
                  <View style={[Styles.width50]}>
                    <MainButton textSmall={true} title={'upgrade membership'.toUpperCase()} press={() => this.setState({active: 0})} background="#051441" />
                  </View>
                </View>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.containerPadTop, Styles.containerPadBottom, Styles.mainInput, Styles.row]}>
                <View style={[Styles.notifyBox, Styles.centerItems, Styles.VerticalCenter]}>
                  <Image source={require('../../assets/notifyIcon.png')} style={[Styles.notifyIcon]} />
                </View>
                <View style={[Styles.ml40, Styles.containerPadRight]}>
                  <Text style={[Styles.colorDarkPink, Styles.latoBold, Styles.font24, Styles.mb25]}>{'Title'.toUpperCase()}</Text>
                  <Text style={[Styles.colorBlue, Styles.font30, Styles.latoRegular, Styles.mb25]}>Diam sit amet nisl suscipit. Scelerisque viverra mauris in aliquam sem. Nunc sed augue lacus viverra vitae.</Text>
                  <View style={[Styles.width50]}>
                    <MainButton textSmall={true} title={'Redeem Air Miles'.toUpperCase()} press={() => this.setState({active: 0})} />
                  </View>
                </View>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.containerPadTop, Styles.containerPadBottom, Styles.mainInput, Styles.row]}>
                <View style={[Styles.notifyBox, Styles.centerItems, Styles.VerticalCenter]}>
                  <Image source={require('../../assets/notifyIcon.png')} style={[Styles.notifyIcon]} />
                </View>
                <View style={[Styles.ml40, Styles.containerPadRight]}>
                  <Text style={[Styles.colorDarkPink, Styles.latoBold, Styles.font24, Styles.mb25]}>{'Title'.toUpperCase()}</Text>
                  <Text style={[Styles.colorBlue, Styles.font30, Styles.latoRegular]}>Diam sit amet nisl suscipit. Scelerisque viverra mauris in aliquam sem. Nunc sed augue lacus viverra vitae.</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
    	)
    }
}