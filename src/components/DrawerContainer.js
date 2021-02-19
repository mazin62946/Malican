import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import Icon1 from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import {MainInput, MainSelect, MainCheckBox} from './Input'
import {MainButton} from './Buttons'

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    isVisible: false,
    isVisible1: false,
    checked: false,
  }
  navigateToScreen = (route) => () => {
    alert('test')
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.closeDrawer();
    this.props.navigation.dispatch(navigateAction);
  }
  renderCloseIcon(){
    return(
      <View>
        <TouchableOpacity onPress={() => { this.props.navigation.closeDrawer(); }}>
          <Icon1 name="ios-arrow-round-forward" size={30} color="#fd5387" />
        </TouchableOpacity>
      </View>
    )
  }

  render() {

    return (
      <View style={[Styles.backWhite, Styles.fullWidth, Styles.fullHeight]}>
        <Header
          leftComponent={<Image source={require('../../assets/logo.png')} style={[Styles.logo]} />}
          rightComponent={this.renderCloseIcon()}
          backgroundColor="transparent"
          containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
        />
        <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
          <View style={[Styles.containerPadRight, Styles.containerPadLeft, Styles.fullWidth]}>
            <Text style={[Styles.colorDarkBlue, Styles.latoHeavy, Styles.font72, Styles.mt55, Styles.mb15]}>Hi, Faisal</Text>
            <Text style={[Styles.latoMedium, Styles.font38, Styles.mb100]}>faisal.afzal@centric.ae</Text>
            
            <TouchableWithoutFeedback onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('Profile');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuProfile.png')} style={[Styles.menuProfile]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>My Account</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('ResetPassword');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuReset.png')} style={[Styles.menuReset]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Reset Password</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('Notification');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuNotification.png')} style={[Styles.menuNotification]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Notifications</Text>
                <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.notiBack, Styles.sliderButtonSelected]}>
                  <Text style={[Styles.colorWhite, Styles.latoHeavy, Styles.font30]}>08</Text>
                </View>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('ChangePassword');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuReset.png')} style={[Styles.menuReset]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Change Password</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <View style={[Styles.removeDiv]}>
            <TouchableWithoutFeedback  onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('Payment');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuPayment.png')} style={[Styles.menuPayment]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Payment Methods</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>
            </View>

            <TouchableWithoutFeedback onPress={() => {this.setState({isVisible1:true})}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuRT.png')} style={[Styles.menuRT]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Reset Tutorial</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('TermsCondition');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuTerms.png')} style={[Styles.menuTerms]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Terms & Conditions</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => {this.props.navigation.closeDrawer(); this.props.navigation.navigate('PrivacyPolicy');}}>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.fullWidth, Styles.row, Styles.flexRow, Styles.mb100]}>
              <View style={[Styles.width20, Styles.centerItems]}>
                <Image source={require('../../assets/menuPrivacy.png')} style={[Styles.menuPrivacy]} />
              </View>
              <View style={[Styles.width80, Styles.row, Styles.flexRow]}>
                <Text style={[Styles.colorMenuBlue, Styles.font48, Styles.latoMedium]}>Privacy Policy</Text>
              </View>
            </View>
            </TouchableWithoutFeedback>
            

          </View>
        </ScrollView>
        <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.mb55, Styles.bottomSelf]}>
          <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row]}>
            <Image source={require('../../assets/logoutIcon.png')} style={[Styles.logoutIcon]} />
            <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoMedium, Styles.ml40]}>Logout</Text>
          </View>
          <Text style={[Styles.colorLightBlue, Styles.font48, Styles.latoMedium]}>V1.1.5</Text>
        </View>
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
          // backdropColor="transparent"
          style={[Styles.backWhite, Styles.AddCardModal, Styles.containerPadLeft, Styles.containerPadRight]}
        >
          <Text style={[Styles.colorDarkBlue, Styles.latoBlack, Styles.font60, Styles.mb35]}>{'Add your card'.toUpperCase()}</Text>
          <Text style={[Styles.colorLightBlue, Styles.latoRegular, Styles.font38, Styles.mb100]}>Please add your card</Text>
          <MainInput label={'Card Title'} small={true} placeholder={'Enter title'} onChangeText={(value) => console.log(value)} />
          <MainInput label={'Card Number'} small={true} placeholder={'Enter card number'} onChangeText={(value) => console.log(value)} />
          <View style={[Styles.row, Styles.flexRow]}>
            <View style={Styles.width45}>
              <MainInput label={'Valid'} small={true} placeholder={'MM/YY'} onChangeText={(value) => console.log(value)} />
            </View>
            <View style={Styles.width50}>
              <MainInput label={'CVV Code'} small={true} placeholder={'***'} onChangeText={(value) => console.log(value)} />
            </View>
          </View>
          <View style={[Styles.fullWidth, Styles.mb55]}>
            <MainCheckBox
              label={'Save My Card'}
              checked={this.state.checked1}
              change={()=> {this.setState({checked1: !this.state.checked1})}}
              checkedIcon="check-square"
              uncheckedIcon="square"
            />
          </View>
          <MainButton title={'add card'.toUpperCase()} press={() => this.setState({isVisible: false})} />
        </Modal>
        <Modal
          isVisible={this.state.isVisible1}
          onBackdropPress={() => this.setState({ isVisible1: false })}
          // backdropColor="transparent"
          style={[Styles.backWhite, Styles.redeemModal, Styles.containerPadLeft, Styles.containerPadRight]}
        >
          <View style={[Styles.fullWidth, Styles.fullHeight, Styles.VerticalCenter]}>
            <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoBlack, Styles.mb35]}>Reset Toturial</Text>
            <Text style={[Styles.latoRegular, Styles.font38, Styles.colorLightBlue, Styles.mb100]}>Are you sure you want to reset tutorial?</Text>
            <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth]}>
              <TouchableWithoutFeedback onPress={() => this.setState({ isVisible1: false })}>
                <Text style={[Styles.latoBold, Styles.font38, Styles.colorDarkPink]}>{'cancel'.toUpperCase()}</Text>
              </TouchableWithoutFeedback>
              <View style={[Styles.width35]}>
                <MainButton textSmall={true} title={'Confirm'.toUpperCase()} press={() => this.setState({ isVisible1: false })} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}