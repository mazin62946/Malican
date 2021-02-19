import React, { Component } from 'react'
import Styles from '../../styles/style'
import {
  View,
  Text
} from 'react-native'
import {MainInput, MainSelect} from '../Input'

import { strings, lang } from '../../locales/i18n';

export default class Step1 extends Component {
	state = {
		code: ''
	}
	render () {
		const list = [
			{
				value: '',
				label: strings('signup.s_code')
			},
			{
				value: '+92',
				label: '+92'
			},
		]
		return (
			<View style={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight]}>
				<MainInput label={strings('signup.email')} value={this.props.email} keyboardType="email-address" error={this.props.emailError} placeholder={strings('signup.e_email')} onChangeText={(value) => this.props.emailChange(value)} />
				<View style={[Styles.row, Styles.flexRow]}>
					<View style={Styles.width45}>
						<MainSelect label={strings('signup.c_code')} value={this.props.countryCode} error={this.props.countryCodeError} data={(this.props.countryCodeData) ? this.props.countryCodeData : list} onChange={(value) => {this.setState({code: value}); this.props.countryChange(value)}} />
					</View>
					<View style={Styles.width50}>
						<MainInput label={strings('signup.ph_num')} value={this.props.phone} keyboardType="phone-pad" error={this.props.phoneError} placeholder={strings('signup.e_phnum')} onChangeText={(value) => this.props.phoneChange(value)} />
					</View>
				</View>
				
			</View>
		)
	}
}

