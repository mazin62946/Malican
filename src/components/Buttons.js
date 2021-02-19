import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import Styles from '../styles/style'
class MainButton extends Component {
	render () {
		return (
			<Button
	            title={this.props.title}
	            titleStyle={[(this.props.textSmall) ? Styles.font30 : Styles.font48, Styles.latoBold, Styles.colorWhite, (this.props.color) ? {color: this.props.color} : {}]}
	            buttonStyle={[Styles.fullWidth, Styles.radius45, Styles.buttonBackground, (this.props.textSmall) ? Styles.height110 : Styles.height170, (this.props.background) ? {backgroundColor: this.props.background} : {}, (this.props.border) ? {borderColor: this.props.borderColor, borderWidth: 1} : {},(this.props.width) ? {width: this.props.width} : {}, (this.props.marginHorizontal)? {marginHorizontal: this.props.marginHorizontal}: {}]}
	            containerViewStyle={[Styles.fullWidth]}
	            onPress={()=> {this.props.press()}}
          	/>
		)
	}
}

export {
	MainButton
}