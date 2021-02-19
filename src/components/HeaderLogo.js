import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native'
import Styles from '../styles/style'
export default class HeaderLogo extends Component {
	render () {
    	return (
    		<View style={[Styles.containerPaddingLeft]}><Image style={[Styles.logo]} source={require('../../assets/logo.png')} /></View>
    	)
    }
}