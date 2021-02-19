import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native'
import { withNavigation } from 'react-navigation';

import Styles from '../styles/style'
class HeaderMenu extends Component {
	render () {
    	return (
    		<View style={[Styles.containerPaddingRight]}>
          <TouchableWithoutFeedback
              onPress={() => this.props.navigation.openDrawer()}
            >
            <Image style={[Styles.menu]} source={require('../../assets/menu.png')} />
          </TouchableWithoutFeedback>
        </View>
    	)
    }
}

export default withNavigation(HeaderMenu)