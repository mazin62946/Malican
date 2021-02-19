//import liraries
import React, { Component } from 'react';
import { NativeModules, View, Text, StyleSheet, ImageBackground, Image, Button, I18nManager, AsyncStorage } from 'react-native';
import Styles from '../styles/style'
import {MainButton} from '../components/Buttons'
import I18n from 'react-native-i18n';
import { strings, lang } from '../locales/i18n';

// create a component
export default class LangChange extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: true,
            lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
        }
        // setTimeout(function() {
        //     //this.setState({hide:false})
        //     this.renderLang()
        // }, 3000)
    }
    componentWillMount () {
        AsyncStorage.getItem('access_token')
        .then((value) => {
            if (value) {
                this.props.navigation.navigate('Home')
            }
            else{
                setTimeout(() => {
                    AsyncStorage.getItem('lang')
                    .then((value) => {
                        if (value) {
                            this.props.navigation.navigate('Start')
                        }
                        else{
                            this.setState({hide: false});
                        }
                    })
                }, 5000)
            }
        })
            
    }
    renderLang(){
        this.setState({hide:false})
    }
    changeLang(value) {
        const key = (value != 'ar') ? 'en' : 'ar';
        this.setState({lang: key})
        AsyncStorage.setItem('lang', key)
        I18nManager.forceRTL((key == 'ar') ? true : false);
        I18nManager.isRTL = (key == 'ar') ? true : false
        I18n.locale = key;
        I18nManager.forceRTL(I18nManager.isRTL)
        // alert(key)
        NativeModules.DevSettings.reload();

    }
    render () {
        return (
            <ImageBackground source={require('../../assets/confirmationBack.png')} style={[Styles.fullWidth, Styles.fullHeight, Styles.flex, Styles.flexRow, Styles.flexColumn,Styles.centerItems, Styles.VerticalCenter]}>
            
            <View style={[ Styles.centerItems, Styles.VerticalCenter ]}>
                 {/* <Image source={require('../../assets/splash-logo.png')} style={{width:"30%", height: '30%'}} /> */}
                 <Image source={require('../../assets/splash-logo.png')} style={[Styles.splashlogo, (this.state.hide) ? {} : Styles.mb200]} />
     
                 <Text style={[Styles.colorWhite, Styles.latoMedium, Styles.font60, Styles.mb72, (this.state.hide) ? Styles.removeDiv : {}]}>
                     Please select language to continue
                 </Text>

               

                 <View style={[Styles.flexRow, Styles.row, (this.state.hide) ? Styles.removeDiv : {}]} >
                    

                        <MainButton title={'English'.toUpperCase()}   buttonStyle={{ backgroundColor: '#fff'}} 
                        color={'#000'}
                        background={'#fff'} 
                        width={150}
                        marginHorizontal={10}
                        press={() => {this.changeLang('en')}}
                        />
                            <MainButton title={'عربى'.toUpperCase()}   buttonStyle={{ backgroundColor: '#fff' }} 
                        color={'#000'}
                        background={'#fff'} 
                        width={150}
                        press={() => {this.changeLang('ar')}}
                        marginHorizontal={10}
                        />
                 </View>
            </View>
             
          </ImageBackground>
        );
    }
};


