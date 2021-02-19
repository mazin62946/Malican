import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
  AsyncStorage
} from 'react-native'
import ImageSlider from 'react-native-image-slider';
import { Button } from 'react-native-elements'
import {MainButton} from '../components/Buttons'

import Styles from '../styles/style'
import { strings, lang } from '../locales/i18n';

export default class Start extends Component {
	constructor(props) {
    	super(props);
    	AsyncStorage.getItem('access_token')
	    .then((value) => {
	      if (value) {
	          this.props.navigation.navigate('Home')
	      }
	    })
    }
	render () {
		const images = [
	      	{
	      		image: require('../../assets/slide1.png'),
	      		title: strings('getstarted.e_efforless'),
	      		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit metus nec tincidunt varius.'
	      	},
	      	{
	      		image: require('../../assets/slide2.png'),
	      		title: strings('getstarted.exp_awd'),
	      		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit metus nec tincidunt varius.'
	      	},
	      	{
	      		image: require('../../assets/slide3.png'),
	      		title: strings('getstarted.earn_mp'),
	      		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit metus nec tincidunt varius.'
	      	},
    	];
    	const { navigate } = this.props.navigation;
    	return (
    		<View style={[Styles.fullWidth, Styles.fullHeight]}>
				<ScrollView style={[Styles.backWhite, Styles.fullWidth, Styles.fullHeight]} contentContainerStyle={[Styles.centerItems, Styles.VerticalCenter]} showsVerticalScrollIndicator={false}>
					<Image style={[Styles.mainLogo, Styles.imageContain, Styles.autoHeight, Styles.mt55]} source={require('../../assets/main-logo.png')} />
			    	<ImageSlider
			          loopBothSides
			          autoPlayWithInterval={3000}
			          images={images}
			          style={[Styles.fullWidth, Styles.startCarusel, Styles.transBackground, {flex: 0}]}
			          customSlide={({ index, item, style, width }) => (
			            // It's important to put style here because it's got offset inside
			            <View key={index} style={[style]}>
			            <ImageBackground
	          				source={item.image}
	          				style={[Styles.fullWidth, Styles.fullHeight, Styles.imageContain]}
	        			>
	        				<View style={[Styles.fullWidth, Styles.centerItems, Styles.padding10Per, Styles.VerticalBottom, Styles.flex]}>
	        					<Text style={[Styles.font72, Styles.colorWhite, Styles.mb55, Styles.latoBold]}>{item.title}</Text>
	        					<Text style={[Styles.centerText, Styles.colorWhite, Styles.font48, Styles.mb100, Styles.latoRegular]}>{item.content}</Text>
	        				</View>
	        			</ImageBackground>
			            </View>
			          )}
			          customButtons={(position, move) => (
			            <View style={[Styles.centerItems, Styles.row, Styles.fullWidth, Styles.VerticalCenter, Styles.mb55, Styles.mt55]}>
			              {images.map((image, index) => {
			                return (
			                  <TouchableWithoutFeedback
			                    key={index}
			                    onPress={() => move(index)}
			                    style={Styles.button}
			                  >
			                    <Text style={[Styles.sliderButton,(position == index) ? Styles.sliderButtonSelected : {}, (index != 0) ? Styles.ml5 : {}]}>
			                      
			                    </Text>
			                  </TouchableWithoutFeedback>
			                );
			              })}
			            </View>
			          )}
			        />
			        <View style={[Styles.containerPadLeft, Styles.containerPadRight, Styles.fullWidth, Styles.mb55]}>
					    <MainButton title={strings('getstarted.g_started').toUpperCase()} press={() => navigate('Signup')} />
			        </View>
			        <View style={[Styles.fullWidth, Styles.centerItems, Styles.row, Styles.VerticalCenter]}>
			        	<Text style={[Styles.latoRegular, Styles.font48, Styles.colorLightBlue]}>{strings('getstarted.Already_acc')} </Text>
			        	<TouchableWithoutFeedback
		                    onPress={() => navigate('Signin')}
		                >
			        	<Text style={[Styles.latoRegular, Styles.font48, Styles.colorLightPink]}>{strings('getstarted.s_in')}</Text>
			        	</TouchableWithoutFeedback>
			        </View>
			    </ScrollView>
		    </View>
    	)
    }
}
