import React, { Component } from 'react'
import Styles from '../../styles/style'
import {
  View,
  Text
} from 'react-native'
import {MainInput, MainSelect} from '../Input'
import api from '../api'
import { strings, lang } from '../../locales/i18n';

export default class Step2 extends Component {
	state = {
		code: '',
		list:  [
			{
				value: '',
				label: strings('signup.s_nationality')
			},
			{
				value: 'UAE',
				label: 'UAE'
			},
		],
	}

    
	render () {
		const list = [
			{
				value: '',
				label: 'Select nationality'
			},
			{
				value: 'UAE',
				label: 'UAE'
			},
		];
		const titlelist = [
			{
				value: '',
				label: strings('signup.s_title')
			},
			{
				value: 'Mr',
				label: 'Mr'
			},
			{
				value: 'Miss',
				label: 'Miss'
			},
			{
				value: 'Ms',
				label: 'Ms'
			},
			{
				value: 'Mrs',
				label: 'Mrs'
			},
		]
		return (
			<View style={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight]}>
				<View style={[Styles.row, Styles.flexRow]}>
					<View style={Styles.width45}>
						<MainSelect label={strings('signup.title')} value={this.props.title} error={this.props.titleError} data={titlelist} onChange={(value) => {this.setState({code: value}); this.props.titleChange(value)}} />
					</View>
					<View style={Styles.width50}>
						<MainInput label={strings('signup.f_name')} value={this.props.firstname} error={this.props.firstnameError} placeholder={strings('signup.e_fname')} onChangeText={(value) => this.props.firstnameChange(value)} />
					</View>
				</View>
				<MainInput label={strings('signup.sname')} value={this.props.surname} error={this.props.surnameError} placeholder={strings('signup.e_sname')} onChangeText={(value) => this.props.surnameChange(value)} />
				<MainSelect label={strings('signup.nationality')} value={this.props.nationality} error={this.props.nationalityError} data={(this.props.nationalityData) ? this.props.nationalityData : this.state.list} onChange={(value) => {this.setState({code: value}); this.props.nationalityChange(value)}} />
			</View>
		)
	}
}

