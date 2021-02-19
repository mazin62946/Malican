import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground
} from 'react-native'
import Styles from '../styles/style'
import { CheckBox } from 'react-native-elements'
import {MainButton} from '../components/Buttons'
import Permissions from 'react-native-permissions'
import DocScannerModule from 'rn-document-scanner-android';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements'
import Modal from "react-native-modal";

export default class AddReceipt extends Component {
  state = {
    steps: true,
    step: 1,
    checked: false,
    permission: false,
    image: '',
    path: '',
    file: '',
    convertImage: '',
    convert: false,
    isVisible: false,
  }
	static navigationOptions = ({ navigation }) => ({
  	title: 'Add Receipt',
  	tabBarIcon: ({focused}) => (
      <Image style={[Styles.receiptIcon, Styles.modeContain, Styles.tintgray, (focused) ? Styles.tintBlue : {}]} source={require('../../assets/receipt.png')} />
    ),
    tabBarOptions: { 
      activeTintColor: '#5f51fb',
      inactiveTintColor: '#677294',
      labelStyle: [Styles.font30, Styles.latoMedium],
      style: [Styles.tabBar, Styles.removeDiv]
    }
	})
  openDrawer(){
    return(

      <View>
      <TouchableOpacity onPress={() => { this.props.navigation.openDrawer(); }}>
      <Image source={require('../../assets/menuIcon.png')} style={Styles.menuIcon} />
      </TouchableOpacity>
    </View>
    )
  }
  renderHeading(){
    if (this.state.step == 1) {
      return 'How long is your receipt?'
    }
    // if (this.state.step == 2) {
    //   return 'Take pictures of your receipt'
    // }
    if (this.state.step == 2) {
      return 'Submit your receipt'
    }
    if (this.state.step == 3) {
      return 'You’ve submitted your receipt'
    }
  }
  renderImage(){
    if (this.state.step == 1) {
      return (<Image source={require('../../assets/step1.png')} style={[Styles.imageContain, Styles.step1]} />)
    }

    // if (this.state.step == 2) {
    //   return (<Image source={require('../../assets/step2.png')} style={[Styles.imageContain, Styles.step2]} />)
    // }

    if (this.state.step == 2) {
      return (<Image source={require('../../assets/step3-new.png')} style={[Styles.imageContain, Styles.step2]} />)
    }

    if (this.state.step == 3) {
      return (<Image source={require('../../assets/step4.png')} style={[Styles.imageContain, Styles.step4]} />)
    }
  }
  renderDetail(){
    if (this.state.step == 1) {
      return (
        <View style={[Styles.width65]}>
          <Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font48, Styles.centerText, Styles.mb35]}>First select the Normal Receipt or the Long Receipt options.</Text>
          <CheckBox
            center
            containerStyle={[Styles.noBackground, Styles.borderZero, Styles.pad0, Styles.mar0, Styles.ml0, (this.props.small) ? Styles.mb15 : Styles.mb35]}
            wrapperStyle={[Styles.pad0, Styles.mar0, Styles.ml0]}
            size={24}
            title='Dont Show Again'
            checkedIcon="check-square-o"
            checkedColor="#fff"
            uncheckedColor="#fff"
            uncheckedIcon='square-o'
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
            textStyle={[Styles.font38, Styles.latoRegular, Styles.colorWhite]}
          />
        </View>
      )
    }
    // if (this.state.step == 2) {
    //   return (
    //     <View style={[Styles.width80]}>
    //       <Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font48, Styles.centerText]}>Make sure the pictures includes all receipt details. For long receipt you can take up to 10 overlapping pictures as shown. </Text>
    //     </View>
    //   )
    // }
    if (this.state.step == 2) {
      return (
        <View style={[Styles.fullWidth, Styles.containerPadLeftSmall, Styles.containerPadRightSmall]}>
          <Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font48, Styles.centerText]}>Check that all information is clear and easy to read and then press ‘Submit Receipt’.</Text>
        </View>
      )
    }
    if (this.state.step == 3) {
      return (
        <View style={[Styles.width80]}>
          <Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font48, Styles.centerText]}>Don’t forget, all receipts must be submitted within 14 days of purchase.</Text>
        </View>
      )
    }
  }
  scan = () =>{
    DocScannerModule.capture(this.success, this.error)
  }
  success = (data) => {
    alert(data)
    //alert(data.replace('/image', ''))
    this.setState({image: data})
    this.setState({path: data.replace('/image', '')})
    this.setState({file: 'image'})
    this.setState({convert: true})
  }
  error = (data) => {
    alert(data)
    console.log(data)
  }
  _requestPermission = () => {
    Permissions.request('android.permission.CAMERA').then(response => {
      // alert(response)
      if (response == 'granted') {
        this.setState({permission: true})
        this.scan()
      }
      this.setState({ cameraPermission: response })
    })
  }
  myImage(){
    // alert(this.state.image)
  }
	render () {
  	return (
  		<View style={[Styles.fullWidth, Styles.fullHeight]}>
        {(this.state.steps) ? (
          <View style={[Styles.fullWidth, Styles.fullHeight]}>
            <ImageBackground source={require('../../assets/confirmationBack.png')} style={[Styles.fullWidth, Styles.fullHeight, Styles.flex, Styles.flexRow, Styles.flexColumn]}>
              <View style={[Styles.mb100]}></View>
              <View style={[{height: '85%'}, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.flexColumn]}>
                <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font72]}>{this.renderHeading()}</Text>
                {this.renderImage()}
                <View style={[{height: '17%'}, Styles.centerItems]}>
                  {this.renderDetail()}
                </View>
              </View>
              <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.containerPadTop, Styles.containerPadBottom, Styles.stepsBox]}>
                <TouchableWithoutFeedback onPress={() => {this.setState({steps: false})}}>
                <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font48]}>SKIP</Text>
                </TouchableWithoutFeedback>
                <View style={[Styles.row]}>
                  <Text style={[Styles.stepsDot, (this.state.step == 1) ? Styles.backWhite : {}]}></Text>
                  <Text style={[Styles.stepsDot, Styles.ml20, (this.state.step == 2) ? Styles.backWhite : {}]}></Text>
                  <Text style={[Styles.stepsDot, Styles.ml20, (this.state.step == 3) ? Styles.backWhite : {}]}></Text>
                  
                </View>
                {(this.state.step < 3) ? (
                <TouchableWithoutFeedback onPress={() => {this.setState({step: (this.state.step + 1)})}}>
                <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font48]}>NEXT</Text>
                </TouchableWithoutFeedback>
                ) : (
                <TouchableWithoutFeedback onPress={() => {this.setState({steps: false})}}>
                <Text style={[Styles.colorWhite, Styles.latoBold, Styles.font48]}>DONE</Text>
                </TouchableWithoutFeedback>
                ) }
              </View>
            </ImageBackground>
          </View>
        ) : null}

        {(this.state.steps == false && this.state.permission == false) ? (
          <View style={[Styles.fullWidth, Styles.fullHeight]}>
            <ImageBackground source={require('../../assets/confirmationBack.png')} style={[Styles.fullWidth, Styles.fullHeight, Styles.flex, Styles.flexRow, Styles.flexColumn]}>
              <View style={[Styles.mt55, Styles.fullWidth, Styles.centerItems]}>
                <View style={[Styles.mb100]}></View>
                <Text style={[Styles.colorWhite, Styles.latoMedium, Styles.font72]}>Access Camera</Text>
              </View>
              <View style={[Styles.fullWidth, Styles.centerItems]}>
                <Image source={require('../../assets/cameraStep.png')} style={[Styles.mb100, Styles.cameraStep]} />
                <View style={[Styles.width65]}>
                  <Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font48, Styles.centerText]}>Malican would like to access your phone camera</Text>
                </View>
              </View>
              <View style={[Styles.fullWidth, Styles.mb55, Styles.containerPadRight, Styles.containerPadLeft]}>
                <View style={[Styles.mb35]}>
                  <MainButton title={'allow'.toUpperCase()} press={() => this._requestPermission()} background={'#fd5387'} />
                </View>
                <MainButton title={'not now'.toUpperCase()} press={() => console.log('test')} background={'transparent'} border={true} borderColor="#fff" />
              </View>
            </ImageBackground>
          </View>
        ) : null}
        {(this.state.steps == false && this.state.permission != false) ? (
          <View style={[Styles.backWhite]}>
            <Header
              leftComponent={this.openDrawer()}
              centerComponent={{ text: 'Scan Receipt', style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
              backgroundColor="transparent"
              containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
            />
            <View style={[Styles.fullWidth, {height: '91.5%'}, Styles.centerItems]}>
              <Image source={{uri:'file:///'+this.state.image}} style={[Styles.fullWidth, Styles.fullHeight]} />
              <View style={[Styles.submitReceipt, Styles.centerItems, Styles.VerticalCenter]}>
                <TouchableWithoutFeedback onPress={() => {this.setState({isVisible: true})}}>
                  <Image source={require('../../assets/submitCamere.png')} style={[Styles.submitCamere]} />
                </TouchableWithoutFeedback>
              </View>
            </View>
            <Modal
              isVisible={this.state.isVisible}
              onBackdropPress={() => this.setState({ isVisible: false })}
              // backdropColor="transparent"
              style={[Styles.backWhite, Styles.redeemModal]}
            >
              <View style={[Styles.fullWidth, Styles.fullHeight, Styles.containerPadLeft, Styles.containerPadRight, Styles.VerticalCenter, Styles.centerItems]}>
                <Text style={[Styles.colorDarkBlue, Styles.font48, Styles.latoBlack, Styles.mb35]}>Thank You!</Text>
                <Text style={[Styles.latoRegular, Styles.font38, Styles.colorLightBlue, Styles.mb100, Styles.centerText]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in euismod massa.</Text>
                <View style={[Styles.width35]}>
                  <MainButton textSmall={true} title={'got it'.toUpperCase()} press={() =>  {this.setState({ isVisible1: false });}} />
                </View>
              </View>
            </Modal>
          </View>
        ) : null}

      </View>
  	)
  }
}