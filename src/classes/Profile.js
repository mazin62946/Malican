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

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
      userId: AsyncStorage.getItem('userid'),
      title: strings('offers.profile'),
      user: [],
      history: []
    }
    AsyncStorage.getItem('lang')
    .then((value) => {
      this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
    })
    AsyncStorage.getItem('access_token')
    .then((value) => {
      this.setState({token: value})
    })
    AsyncStorage.getItem('userid')
    .then((value) => {
      this.setState({userId: value})
      this.getProfile(value)
      this.getHistory(value)
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
      //alert(JSON.stringify(responseJson))
      if (responseJson.success && responseJson.data) {
        this.setState({user:responseJson.data})
      }
    })
    .catch((err) => { 
      alert(err); 
    });
  }

  getHistory(id){
    fetch(api+'UserDetail/ShoppingHistory?userId='+id, {
      method: 'GET',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.state.token
      },
    })
    .then((response) => response.json())
    .then((responseJson) => { 
      alert(JSON.stringify(responseJson.data))
      // this.setState({history:responseJson.data})
      if (responseJson.success && responseJson.data) {
        this.setState({history:responseJson.data})
      }
    })
    .catch((err) => { 
      alert(err); 
    });
  }
  
	static navigationOptions = ({ navigation }) => ({
  	title: strings('offers.profile'),
  	tabBarIcon: ({focused}) => (
      <Image style={[Styles.profileIcon, Styles.modeContain, Styles.tintgray, (focused) ? Styles.tintBlue : {}]} source={require('../../assets/profile.png')} />
    ),
    tabBarOptions: { 
      activeTintColor: '#5f51fb',
      inactiveTintColor: '#677294',
      labelStyle: [Styles.font30, Styles.latoMedium],
      style: [Styles.tabBar, Styles.bigBoxShadow]
    }
	})
  renderEditIcon (){
    return (
      <View>
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditProfile')}>
      <Image source={require('../../assets/editProfile.png')} style={[Styles.editProfile]} />
      </TouchableWithoutFeedback>
      </View>
    )
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
    const { navigate } = this.props.navigation;
  	return (
  		<View>
        <Header
          leftComponent={this.openDrawer()}
          centerComponent={{ text: strings('myaccount.my_acc'), style: [Styles.font48, Styles.latoBlack, Styles.colorDarkBlue] }}
          rightComponent={this.renderEditIcon()}
          backgroundColor="transparent" 
          containerStyle={[Styles.pad0, Styles.mar0, {paddingHorizontal: 0, height: 'auto'}, Styles.containerPadLeft, Styles.containerPadRight, Styles.backWhite, Styles.pb30, Styles.boxShadow]}
        />
        <View style={[Styles.fullWidth]}>
          <ScrollView style={[Styles.backWhite, Styles.fullWidth, {height: '90%'}]} showsVerticalScrollIndicator={false}>
            <View style={[Styles.containerPadRight, Styles.containerPadLeft, Styles.fullWidth]}>
              <Text style={[Styles.colorDarkBlue, Styles.latoHeavy, Styles.font72, Styles.mt55, Styles.mb25]}>{strings('myaccount.hi')}{(this.state.lang == 'ar') ? '،' : ','} {this.state.user.FirstName}</Text>
              <View style={[Styles.backWhite, Styles.bigBoxShadow, Styles.pad45, {marginLeft: '2%', width: '96%'}, Styles.mb55]}>
                <Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font38, Styles.mb25]}>{strings('myaccount.a_points')}</Text>
                <View style={[Styles.fullWidth, Styles.row, Styles.mb25]}>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoBold]}>{this.state.user.Loyalty_Points}</Text>
                  <Text style={[Styles.colorDarkPink, Styles.font100, Styles.latoLight, Styles.ml20]}>{strings('myaccount.points')}</Text>
                </View>
                <Text style={[Styles.latoLight, Styles.font38, Styles.mb35, Styles.colorLightGray]}>{strings('myaccount.p_exp')} 20 Nov 2020</Text>
                <View>
                  <MainButton title={strings('myaccount.redeem').toUpperCase()} press={() => console.log('test')} />
                </View>
              </View>
              <View style={[Styles.fullWidth, Styles.mb35]}>
                <View style={[Styles.row, Styles.flexRow]}>
                  <ServicesCard type="half" text={strings('myaccount.s_reciept')} image={require('../../assets/receiptIcon.png')} />
                  <ServicesCard type="half" text={strings('myaccount.f_group')} image={require('../../assets/groupIcon.png')} press={() => navigate('Group')} />
                </View>
              </View>
              <View style={[Styles.fullWidth]}>
                <Text style={[Styles.latoHeavy, Styles.font48, Styles.colorDarkBlue, (!this.state.history.length) ? Styles.mb100 : Styles.mb25]}>{strings('myaccount.t_history')}</Text>
                {(this.state.history.length) ? 
                (<View style={[Styles.fullCard, Styles.fullCardMargin, Styles.shadowStyle, Styles.smallBoxShadow, Styles.mb100]}>
                  <View style={[Styles.fullWidth, Styles.row, Styles.flexRow, Styles.historyBox]}>
                    <View style={[Styles.centerItems, Styles.VerticalCenter, Styles.width30, Styles.voucherBack]}>
                      <Image source={require('../../assets/voucherLogo.png')} style={[Styles.maxwh, Styles.imageContain]} />
                    </View>
                    <View style={[Styles.width70, Styles.pl55, Styles.VerticalCenter, Styles.voucherBack]}>
                      <View style={[Styles.row, Styles.mb15]}>
                        <Text style={[Styles.colorExtraBlue, Styles.latoBold, Styles.font100]}>{strings('myaccount.aed')}1000</Text>
                      </View>
                      <Text style={[Styles.latolight, Styles.font40]}>1000 {strings('myaccount.predeem')}</Text>
                    </View>
                  </View>
                  <View style={[Styles.pad20 , Styles.fullWidth, Styles.historyBox, Styles.containerPadRightSmall, Styles.containerPadLeftSmall, Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow]}>
                    <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font24]}>{strings('myaccount.v_id')}:  36521458995</Text>
                    <Text style={[Styles.colorGray, Styles.latoRegular, Styles.font24]}>{strings('myaccount.r_at')} 20 April 2020</Text>
                  </View>
                </View>) :
                (<View style={[Styles.fullWidth, Styles.centerItems, Styles.mt55]}>
                  <View style={[Styles.width70, Styles.centerItems]}>
                    <Text style={[Styles.latoBold, Styles.font38, Styles.colorDarkBlue, Styles.mb35]}>Start Earning Points Today</Text>
                    <Text style={[Styles.colorDarkBlue, Styles.latoRegular, Styles.font30, Styles.centerText]}>You’ll find your transaction history here when you start earning and spending points</Text>
                  </View>
                </View>)}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
  	)
  }
}