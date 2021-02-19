import React, { Component } from 'react'
import Styles from '../../styles/style'
import { Picker, DatePicker } from 'react-native-wheel-datepicker';
import {
  View,
  Text
} from 'react-native'
import {MainInput, MainSelect} from '../Input'
import moment from 'moment';
import helpers from '../Resize'
import { strings, lang } from '../../locales/i18n';

export default class Step3 extends Component {
	
	render () {
		// alert(this.props.dob)
		return (
			<View style={[Styles.fullWidth, Styles.containerPadLeft, Styles.containerPadRight]}>
				
				<View style={[Styles.fullWidth, Styles.mb100, Styles.centerItems]}>
					<Text style={[Styles.colorBlue, Styles.latoBold, Styles.font48, Styles.mb55]}>{strings('signup.dob')}</Text>
					<DatePicker
					  mode="date"
					  onDateChange={(value) => {this.props.dateChange(value)}}
					  order="M-D-Y"
					  minimumDate={moment().add(-50, 'years').toDate()}
					  style={[Styles.noBackground, Styles.fullWidth]}
					  itemSpace={80}
					  textSize={helpers.Size('1125', '48')}
					  textColor={'#c3c7d6'}
					  selectedValue={this.props.dob}
					/>
				</View>

				
			</View>
		)
	}
}

