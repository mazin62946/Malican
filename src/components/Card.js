import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  ImageBackground
} from 'react-native'
import Styles from '../styles/style'
import Icon from 'react-native-vector-icons/Entypo';
import helpers from './Resize'

class ServicesCard extends Component {
	render () {
		return (
			<View style={[(this.props.type == 'half') ? Styles.halfCard : Styles.fullCard,(this.props.type == 'half') ? Styles.halfCardMargin : Styles.fullCardMargin, Styles.centerItems, Styles.serviceCard, Styles.VerticalCenter, Styles.mb35, Styles.smallBoxShadow]}>
				<TouchableWithoutFeedback onPress={() => {this.props.press()}}>
				<View style={[Styles.fullWidth, Styles.centerItems]}>
					<Image source={(this.props.uri) ? {uri:this.props.image} : this.props.image} style={[Styles.mb35, Styles.serviceImage, Styles.imageContain]} />
					<Text style={[Styles.latoRegular, Styles.font38, Styles.colorDarkBlue]}>{this.props.text}</Text>
				</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}
class OffersCard extends Component {
	render () {
		return (
			<View style={[Styles.offerCard, Styles.smallBoxShadow, Styles.mb55, Styles.mr40]}>
				<ImageBackground source={this.props.image} style={[Styles.fullWidth, Styles.offerImage, Styles.VerticalBottom]} >
					<View style={[Styles.containerPadLeft, Styles.fullWidth, Styles.mb55]}>
						<Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font140]}>{this.props.offer}</Text>
						<Text style={[Styles.colorWhite, Styles.latoRegular, Styles.font60]}>{this.props.offerText}</Text>
					</View>
				</ImageBackground>
				<View style={[Styles.VerticalCenter, Styles.centerItems, Styles.row, Styles.flexRow, Styles.offerTextBox]}>
					<Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font72]}>{this.props.title}</Text>
					<Text style={[Styles.colorLightPink, Styles.latoRegular, Styles.font30, Styles.offerExpire, Styles.centerText]}>{this.props.expire}</Text>
				</View>
			</View>
		)
	}
}
class OffersListCard extends Component {
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.smallBoxShadow, Styles.OffersListCard, Styles.mb55, Styles.mt55]}>
				<ImageBackground source={this.props.image} style={[Styles.fullWidth, Styles.offerListImage, Styles.VerticalBottom]} >
					<View style={[Styles.centerItems, Styles.VerticalCenter, Styles.row, Styles.flexRow, Styles.fullWidth, Styles.pad20]}>
						<Text style={[Styles.latoBold, Styles.font24, Styles.colorWhite, Styles.sliderButtonSelected, Styles.pad20, Styles.radius3]}>{this.props.expire}</Text>
						<View style={[Styles.row]}>
							<Icon name="share" style={[Styles.pad20, Styles.buttonBackground, Styles.pt10, Styles.pb10, Styles.radius3]} size={helpers.Size('1125',40)} color="#fff" />
							<Icon name="share" style={[Styles.pad20, Styles.ml20, Styles.buttonBackground, Styles.pt10, Styles.pb10, Styles.radius3]} size={helpers.Size('1125',40)} color="#fff" />
						</View>
					</View>
				</ImageBackground>
				<TouchableWithoutFeedback onPress={() => this.props.press()}>
				<View style={[Styles.fullWidth, Styles.pad45, Styles.offerListBox, Styles.VerticalCenter]}>
					<Text style={[Styles.colorDarkBlue, Styles.latoBold, Styles.font48, Styles.mb35]}>{this.props.title}</Text>
					<Text style={[Styles.colorBlue, Styles.latoRegular, Styles.font30, Styles.mb35]}>{this.props.description}</Text>
					<Text style={[Styles.colorGray, Styles.latoRegular, Styles.font30]}>Starts: {this.props.start}      |      Ends: {this.props.end}</Text>
				</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}	
class CompanyCard extends Component {
	render () {
		return (
			<View style={[(this.props.type == 'half') ? Styles.halfCard : Styles.fullCard,(this.props.type == 'half') ? Styles.halfCardMargin : Styles.fullCardMargin, Styles.centerItems, Styles.serviceCard, Styles.VerticalCenter, Styles.mb35, Styles.smallBoxShadow]}>
				<TouchableWithoutFeedback onPress={() => this.props.press()}>
				<Image source={this.props.image} style={[Styles.imageContain, Styles.maxwh]} />
				</TouchableWithoutFeedback>
			</View>
		)
	}
}	
class VoucherCard extends Component {
	render () {
		return (
			<View style={[Styles.fullWidth, Styles.mb35, Styles.voucherBack, (this.props.disable) ? Styles.disable : {}]}>
				<Image  source={require('../../assets/voucherBack.png')} style={[Styles.fullWidth, Styles.selectText, Styles.voucherBack, Styles.imageContain]}/>
				<TouchableWithoutFeedback onPress={() => this.props.press()}>
				<View style={[Styles.fullWidth, Styles.row, Styles.flexRow]}>
					<View style={[Styles.centerItems, Styles.VerticalCenter, Styles.width30, Styles.voucherBack]}>
						<Image source={this.props.image} style={[Styles.maxwh, Styles.imageContain]} />
					</View>
					<View style={[Styles.width70, Styles.pl55, Styles.VerticalCenter, Styles.voucherBack]}>
						<View style={[Styles.row, Styles.mb15]}>
							<Text style={[Styles.colorExtraBlue, Styles.latoBold, Styles.font100]}>{this.props.point}</Text>
							<Text style={[Styles.colorExtraBlue, Styles.latoBold, Styles.font30, Styles.bottomSelf, Styles.mb15]}>{this.props.type}</Text>
						</View>
						<Text style={[Styles.latolight, Styles.font40]}>{this.props.detail}</Text>
					</View>
				</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}
}	
export {
	ServicesCard,
	OffersCard,
	OffersListCard,
	CompanyCard,
	VoucherCard
}