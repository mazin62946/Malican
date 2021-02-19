import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native'
import Styles from '../styles/style'
import { Header } from 'react-native-elements'
import {MainButton} from '../components/Buttons'
import {ServicesCard, OffersCard} from '../components/Card'
import { strings, lang } from '../locales/i18n';
import api from '../components/api'
import media from '../components/media'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
      userId: AsyncStorage.getItem('userid'),
      user: [],
      services: []
    }
    AsyncStorage.getItem('lang')
    .then((value) => {
      this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
    })
    AsyncStorage.getItem('access_token')
    .then((value) => {
      this.setState({token: value})
      this.getServices()
    })
    AsyncStorage.getItem('userid')
    .then((value) => {
      this.setState({userId: value})
      this.getProfile(value)
    })

  }
  getProfile(id){
    fetch(api+'UserDetail/GetUserDetails?userId='+id, {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.state.token
      },
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      // alert(JSON.stringify(responseJson))
      if (responseJson.success && responseJson.data) {
        this.setState({user:responseJson.data})
      }
    })
    .catch((err) => { 
      alert(err); 
    });
  }
  getServices(){
    fetch(api+'Services/GetServices', {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.state.token
      },
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      // alert(JSON.stringify(responseJson.data))
      // this.setState({history:responseJson.data})
      if (responseJson.success && responseJson.data) {
        this.setState({services:responseJson.data})
      }
    })
    .catch((err) => { 
      alert(err); 
    });
  }
	static navigationOptions = ({ navigation }) => ({
  	tabBarLabel: strings('offers.home'),
  	tabBarIcon: ({focused}) => (
      <Image style={[Styles.homeIcon, Styles.modeContain, Styles.tintgray, (focused) ? Styles.tintBlue : {}]} source={require('../../assets/home.png')} />
    ),
    tabBarOptions: { 
      activeTintColor: '#5f51fb',
      inactiveTintColor: '#677294',
      labelStyle: [Styles.font30, Styles.latoMedium],
      style: [Styles.tabBar, Styles.bigBoxShadow]
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
  renderServices(){
    var services = []
    // alert(this.state.services.length)
    for (var i = 0; i < this.state.services.length; i = i+2) {
      var data = this.state.services[i]
      // alert(media+data.serviceLogo)
      if (typeof this.state.services[i+1] === 'undefined') {
        services.push(<View key={i} style={[Styles.row, Styles.flexRow]}>
          <ServicesCard press={() => {this.props.navigation.navigate('ServiceDetail', {id:data.serviceId})}} type="half" text={(this.state.lang == 'ar') ? data.serviceName_Ar : data.serviceName} uri={true} image={media+data.serviceLogo} />
        </View>)
      }
      else{
        var data2 = this.state.services[i+1]
        services.push(<View key={i} style={[Styles.row, Styles.flexRow]}>
          <ServicesCard press={() => {this.props.navigation.navigate('ServiceDetail', {id:data.serviceId})}} type="half" text={(this.state.lang == 'ar') ? data.serviceName_Ar : data.serviceName} uri={true} image={media+data.serviceLogo} />
          <ServicesCard press={() => {this.props.navigation.navigate('ServiceDetail', {id:data2.serviceId})}} type="half" text={(this.state.lang == 'ar') ? data2.serviceName_Ar : data2.serviceName} uri={true} image={media+data2.serviceLogo} />
        </View>)
      }
      // alert(data.serviceId)
    }
    // for (var i = 0; i < this.state.services.length; i+2) {
    //   var data = this.state.services[i]
    //   alert(data.serviceId)
    // }
    // for (var i = 0; i < this.state.services.length; i+2) {
    //   var data = this.state.services[i]
    //   services.push(

    //   )
    // }
    return services;
  } 
	render () {
  	return (
  		<View style={[Styles.backWhite]}>
        <Header
          leftComponent={this.openDrawer()}
          centerComponent={{ text: strings('welcome_to_malican.w_malican'), style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
          backgroundColor="transparent"
          containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
        />
        <View style={[Styles.fullWidth]}>
          <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
            <View style={[Styles.containerPadRight, Styles.containerPadLeft, Styles.fullWidth]}>
              <Text style={[Styles.colorDarkBlue, Styles.latoHeavy, Styles.font72, Styles.mt55, Styles.mb35]}>{strings('myaccount.hi')}{(this.state.lang == 'ar') ? '،' : ','} {this.state.user.FirstName}</Text>
              <View style={[Styles.backWhite, Styles.bigBoxShadow, Styles.pad45, {marginLeft: '2%', width: '96%'}, Styles.mb55]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font38, Styles.mb35]}>{strings('welcome_to_malican.a_points')}</Text>
                <View style={[Styles.fullWidth, Styles.row, Styles.mb35]}>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoBold]}>{this.state.user.Loyalty_Points}</Text>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoLight, Styles.ml20]}>{strings('welcome_to_malican.points')}</Text>
                </View>
                <Text style={[Styles.latoLight, Styles.font38, Styles.mb35, Styles.colorLightGray]}>{strings('myaccount.p_exp')} 20 Nov 2020</Text>
                <View style={[Styles.mt55]}>
                  <MainButton title={strings('welcome_to_malican.redeem').toUpperCase()} press={() => console.log('test')} />
                </View>
              </View>
              <Text style={[Styles.latoRegular, Styles.font38, Styles.mb100, Styles.colorExtraBlue]}>{strings('welcome_to_malican.s_umembership')}</Text>
              {(this.state.services.length) ? (<View style={[Styles.fullWidth]}>
                <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>{strings('welcome_to_malican.services')}</Text>
                {this.renderServices()}
              </View>) : null}
            </View>
            <View style={[Styles.fullWidth, Styles.containerPadLeft]}>
              <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>Fashion</Text>
              <ScrollView horizontal={true} style={[Styles.fullWidth, Styles.mb55]} showsHorizontalScrollIndicator={false}>
                <View style={[Styles.row, Styles.fullWidth]}>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                </View>
              </ScrollView>
            </View>
            <View style={[Styles.fullWidth, Styles.containerPadLeft]}>
              <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, Styles.mb55]}>Health & Wellness</Text>
              <ScrollView horizontal={true} style={[Styles.fullWidth, Styles.mb55]} showsHorizontalScrollIndicator={false}>
                <View style={[Styles.row, Styles.fullWidth]}>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                  <OffersCard image={require('../../assets/offerImage.png')} offer="40% OFF" offerText="On All Services" title="Lutetia" expire="Expires in 7 days"/>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
  	)
  }
}