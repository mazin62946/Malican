import React, { Component } from 'react'
import Styles from '../../styles/style'
import {
  View,
  Text,
  Image
} from 'react-native'
import { strings, lang } from '../../locales/i18n';

import {MainInput, MainSelect, MainCheckBox} from '../Input'
export default class Step4 extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			code: '',
			checked: false,
			checked1: false,
			secure: true,
			secure1: true,
			valid1: false,
			valid2: false,
			valid3: false,
			valid4: false,
		}
		
	}
	checkPassword(value){
		var passDigit = /[\d]{1}/;
		var passSmall = /[\a-z]{1}/;
		var passBig = /[\A-Z]{1}/;
		this.setState({valid1: (value.length >= 8) ? true : false})
		this.setState({valid2: (passDigit.test(value)) ? true : false})
		this.setState({valid3: (passBig.test(value)) ? true : false})
		this.setState({valid4: (passSmall.test(value)) ? true : false}) 
		var accept = (this.state.valid1 && this.state.valid2 && this.state.valid3 && this.state.valid4) ? true : false
		this.props.acceptPassword(accept)
	}
	componentDidMount(){
		this.checkPassword(this.props.password)
	}
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight, Styles.noBackground]}>
				<MainInput error={this.props.passwordError} value={this.props.password} label={strings('signup.pass')} secure={this.state.secure} placeholder={strings('signup.e_pass')} onChangeText={(value) => {this.props.passwordChange(value); this.checkPassword(value)}} iconAction={true} actionPress={() => {this.setState({secure: !this.state.secure})}} iconInput={true} icon={(this.state.secure) ? 'eye' : 'eye-with-line'}/>
				<Text style={[Styles.colorBlue, Styles.latoBold, Styles.font48, Styles.mb55]}>{strings('signup.pass_c')}</Text>
				<MainCheckBox
					label={strings('signup.use_char')}
					checked={this.state.valid1}
					change={()=> {console.log('test')}}
					checkedIcon="check-circle"
					uncheckedIcon="circle"
					small={true}
				/>
				<MainCheckBox
					label={strings('signup.use_num')}
					checked={this.state.valid2}
					change={()=> {console.log('test')}}
					checkedIcon="check-circle"
					uncheckedIcon="circle"
					small={true}
				/>
				<MainCheckBox
					label={strings('signup.use_ul')}
					checked={this.state.valid3}
					change={()=> {console.log('test')}}
					checkedIcon="check-circle"
					uncheckedIcon="circle"
					small={true}
				/>
				<MainCheckBox
					label={strings('signup.use_ll')}
					checked={this.state.valid4}
					change={()=> {console.log('test')}}
					checkedIcon="check-circle"
					uncheckedIcon="circle"
					small={true}
				/>
				<View style={[Styles.mb55]}></View>
				<MainInput error={this.props.confirmpasswordError} value={this.props.confirmpassword} label={strings('signup.c_pass')} secure={this.state.secure1} placeholder={strings('signup.e_pass')} onChangeText={(value) => this.props.confirmpasswordChange(value)} iconAction={true} actionPress={() => {this.setState({secure1: !this.state.secure1})}} iconInput={true} icon={(this.state.secure1) ? 'eye' : 'eye-with-line'}/>
				<MainCheckBox
					label={strings('signup.agree_tc')}
					checked={this.props.terms}
					change={()=> {this.setState({checked: !this.state.checked}); this.props.termsChange()}}
					checkedIcon="check-square"
					uncheckedIcon="square"
					error={this.props.termsError}
				/>

				<MainCheckBox
					label={strings('signup.keep_po')}
					checked={this.state.checked1}
					change={()=> {this.setState({checked1: !this.state.checked1})}}
					checkedIcon="check-square"
					uncheckedIcon="square"
				/>
				<View style={[Styles.mb55]}></View>
			</View>
		)
	}
}

