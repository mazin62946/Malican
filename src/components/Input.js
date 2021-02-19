import React, { Component } from 'react'
import Styles from '../styles/style'
import {
  View,
  Text,
  TextInput,
  Picker,
  Image,
  TouchableWithoutFeedback,
  AsyncStorage
} from 'react-native'
import { CheckBox } from 'react-native-elements'
import helpers from './Resize'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';
import { TextInputMask } from 'react-native-masked-text'
import DatePicker from 'react-native-datepicker';

class MainInput extends Component {
	state = {
		lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
	}
	componentDidMount () {
        AsyncStorage.getItem('lang')
        .then((value) => {

            this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
        })
    }
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.mb100]}>
				<Text style={[Styles.colorBlue, Styles.latoBold, (this.props.small) ? Styles.font30 : Styles.font48, (this.props.small) ? {} : Styles.mb35]}>{this.props.label}</Text>
				<TextInput
		            style={[Styles.fullWidth, Styles.font48, Styles.latoMedium, Styles.mainInput, Styles.padl0, (this.state.lang == 'ar') ? {textAlign:'right'} : {}]}
		            onChangeText={(text) => this.props.onChangeText(text)}
		            value={this.props.value}
		            placeholder={this.props.placeholder}
		            placeholderTextColor="#e5e7f0"
		            secureTextEntry={(this.props.secure) ? true : false}
		            keyboardType={(this.props.keyboardType) ? this.props.keyboardType : 'default'}
          		/>
          		{(this.props.iconInput && !this.props.iconAction) ? <Icon1 name={this.props.icon} style={Styles.inputIcon} size={20} color={(this.props.iconColor) ? this.props.iconColor : "#c3c7d6"} /> : null}
          		{(this.props.iconInput && this.props.iconAction) ? 
          			(
          				<TouchableWithoutFeedback onPress={() => this.props.actionPress()}>
          				<Icon1 name={this.props.icon} style={Styles.inputIcon} size={20} color={(this.props.iconColor) ? this.props.iconColor : "#c3c7d6"} />
          				</TouchableWithoutFeedback>
          			)
          		: null}
				{(this.props.error) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5]}>{this.props.error}</Text> : null}
			</View>
		)
	}
}
class MainDateInput extends Component {
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.mb100]}>
				<Text style={[Styles.colorBlue, Styles.latoBold, (this.props.small) ? Styles.font30 : Styles.font48, (this.props.small) ? {} : Styles.mb35]}>{this.props.label}</Text>
				<DatePicker date={this.props.date} mode="date" format="DD MMMM YYYY" showIcon={false}
	              	style={[Styles.fullWidth, Styles.mainInput, Styles.padl0, Styles.border0]}
	              	textStyle={[Styles.font48, Styles.latoMedium]}
	              	customStyles={{
		              dateInput: [Styles.fullWidth, Styles.padl0, Styles.border0, Styles.leftContent],
		              dateText: [Styles.font48, Styles.latoMedium, Styles.pt30]
		            }} 
            		onDateChange={(date) => { this.props.onChangeText(date) }}
          		/>
				
          		{(this.props.iconInput) ? <Icon name={this.props.icon} style={Styles.inputIcon} size={20} color={(this.props.iconColor) ? this.props.iconColor : "#c3c7d6"} /> : null}
			</View>
		)
	}
}
class MainCheckBox extends Component {
	render () {
		return (
			<View style={[Styles.fullWidth]}>
				<CheckBox
				  containerStyle={[Styles.noBackground, Styles.borderZero, Styles.pad0, Styles.mar0, Styles.ml0, (this.props.error) ? {} : (this.props.small) ? Styles.mb15 : Styles.mb35]}
				  wrapperStyle={[Styles.pad0, Styles.mar0, Styles.ml0]}
				  size={24}
				  title={this.props.label}
				  checkedIcon={this.props.checkedIcon}
				  checkedColor="#fd5387"
				  uncheckedColor="#fd5387"
				  uncheckedIcon={this.props.uncheckedIcon}
				  checked={this.props.checked}
				  onPress={() => this.props.change()}
				  textStyle={[Styles.font30, Styles.latoRegular, Styles.colorBlue]}
				/>
				{(this.props.error) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5, Styles.mb35]}>{this.props.error}</Text> : null}

			</View>
		)
	}
}
class MainSelect extends Component {
	state = {
		text: '',
		lang: (AsyncStorage.getItem('lang') == 'ar') ? 'ar' : 'en',
	}
	componentDidMount () {
        AsyncStorage.getItem('lang')
        .then((value) => {

            this.setState({lang: (value == 'ar') ? 'ar' : 'en'})
        })
    }
	renderLabel(){
		// alert(this.state.lang)
		if (this.props.value) {
			for (var i = 0; i < this.props.data.length; i++) {
				if (this.props.data[i].value == this.props.value) {
					return (this.props.data[i].labelAr && this.state.lang == 'ar') ? this.props.data[i].labelAr : this.props.data[i].label
				}
			}
		}
		else{
			return (this.props.data[0].labelAr && this.state.lang == 'ar') ? this.props.data[0].labelAr : this.props.data[0].label
			//return this.props.data[0].label
		}
	}
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.mb100]}>
				<Text style={[Styles.colorBlue, Styles.latoBold, , (this.props.small) ? Styles.font30 : Styles.font48, (this.props.small) ? {} : Styles.mb35]}>{this.props.label}</Text>
				<View style={[Styles.fullWidth, Styles.mainInput]}>
					<View style={[Styles.fullWidth, Styles.selectText, Styles.row, Styles.flexRow, Styles.centerItems, {paddingBottom: 13, paddingTop: 15}]}>
						<Text style={[Styles.font48, Styles.latoMedium]}>{(this.state.text != '') ? this.state.text : this.renderLabel()}</Text>
						<Icon name="caret-down" size={20} color="#79809b" />
					</View>
					<Picker
	              		style={[Styles.fullWidth, Styles.font48, Styles.latoMedium, Styles.mainInput, Styles.pad0, Styles.hideDiv, (this.state.lang == 'ar') ? {textAlign:'right'} : {}]}
	              		itemStyle={[Styles.font48, Styles.latoMedium, Styles.pad0, (this.state.lang == 'ar') ? {textAlign:'right'} : {}]}
	          			textStyle={[Styles.font48, Styles.latoMedium, Styles.pad0, (this.state.lang == 'ar') ? {textAlign:'right'} : {}]}
	              		selectedValue={this.props.value}
	              		onValueChange={(itemValue, itemIndex) => {
			              	this.setState({text:(this.props.data[itemIndex].labelAr && this.state.lang == 'ar') ? this.props.data[itemIndex].labelAr : this.props.data[itemIndex].label});
			              	this.props.onChange(itemValue)
			            }}
	              		
	              		>
	              		{this.props.data.map((i, index) => (
	                		<Picker.Item key={index} label={(i.labelAr && this.state.lang == 'ar') ? i.labelAr : i.label} value={i.value} />
	              		))}
	            	</Picker>
	            </View>
				{(this.props.error) ? <Text style={[Styles.font30, Styles.latoRegular, Styles.colorError, Styles.mt5]}>{this.props.error}</Text> : null}
			</View>
		)
	}
}

export {
	MainInput,
	MainSelect,
	MainCheckBox,
	MainDateInput
}