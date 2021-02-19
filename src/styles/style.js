import {
  StyleSheet,
  Dimensions 
} from 'react-native'
const {width, height} = Dimensions.get('window');

import helpers from '../components/Resize'
const Styles = StyleSheet.create({
	fullWidth: {
		width: '100%'
	},
	widthThird:{
		width: '32%'
	},
	width20: {
		width: '20%'
	},
	width25: {
		width: '25%'
	},
	width30: {
		width: '30%'
	},
	width35: {
		width: '35%'
	},
	width45: {
		width: '45%'
	},
	width50: {
		width: '50%'
	},
	width60: {
		width: '60%'
	},
	width65: {
		width: '65%'
	},
	width70: {
		width: '70%'
	},
	width80: {
		width: '80%'
	},
	maxwh:{
		maxWidth: '80%',
		maxHeight: '80%'
	},
	height200: {
		height: helpers.Size('1125', 200)
	},
	fullHeight: {
		height: '100%'
	},
	flex: {
		flex: 1
	},
	containerPadLeft: {
		paddingLeft: helpers.Size('1125', 70)
	},
	containerPadRight: {
		paddingRight: helpers.Size('1125', 70)
	},
	containerPadTop: {
		paddingTop: helpers.Size('1125', 70)
	},
	containerPadBottom: {
		paddingBottom: helpers.Size('1125', 70)
	},
	containerPadLeftSmall: {
		paddingLeft: helpers.Size('1125', 60)
	},
	containerPadRightSmall: {
		paddingRight: helpers.Size('1125', 60)
	},
	row: {
		flexDirection : 'row'
	},
	flexRow: {
		justifyContent:'space-between'
	},
	flexColumn: {
		flexDirection: 'column',
	},
	centerItems: {
		alignItems: 'center'
	},
	centerSelf: {
		alignSelf: 'center'
	},
	bottomSelf: {
		alignSelf: 'flex-end'
	},
	
	centerText: {
		textAlign: 'center'
	},
	VerticalCenter: {
		justifyContent: 'center',
	},
	leftContent: {alignItems: 'flex-start', justifyContent: 'flex-start'},
	VerticalBottom: {
		justifyContent: 'flex-end',
	},
	startCarusel: {
		height: helpers.Size('1125', '1365'),
		marginTop: helpers.Size('1125', '50')

	},
	mainLogo: {
		width: helpers.Size('1125', '360'),
		height: helpers.Size('1125', '256')
	},
	logo: {
		width: helpers.Size('1125', '161'),
		height: helpers.Size('1125', '114')
	},
	imageContain: {
		resizeMode: 'contain'
	},
	transBackground: {
		backgroundColor: 'transparent'
	},
	padding10Per: {
		paddingLeft: '10%',
		paddingRight: '10%',
	},
	font140: {
		fontSize: helpers.Size('1125', '140')
	},
	font100: {
		fontSize: helpers.Size('1125', '100')
	},
	font72: {
		fontSize: helpers.Size('1125', '72')
	},
	font60: {
		fontSize: helpers.Size('1125', '60')
	},
	font48: {
		fontSize: helpers.Size('1125', '48')
	},
	font40: {
		fontSize: helpers.Size('1125', '40')
	},
	font38: {
		fontSize: helpers.Size('1125', '38')
	},
	font36: {
		fontSize: helpers.Size('1125', '36')
	},
	font30: {
		fontSize: helpers.Size('1125', '30')
	},
	font24: {
		fontSize: helpers.Size('1125', '24')
	},
	backWhite: {
		backgroundColor: '#fff',
	},
	colorError: {
		color: '#fd5387'
	},
	colorWhite: {
		color: '#fff'
	},
	colorLightBlue: {
		color: '#79809b'
	},
	colorDarkBlue: {
		color: '#051441'
	},
	colorLightPink: {
		color: '#f376c2'
	},
	colorDarkPink: {
		color: '#fd5387'
	},
	colorMenuBlue: {
		color: '#121b40'
	},
	colorBlue: {
		color: '#677294'
	},
	colorExtraBlue: {
		color: '#6985fb'
	},
	colorLightGray: {
		color: '#8b96a1'
	},
	colorGray: {
		color: '#c3c7d6'
	},
	buttonBackground: {
		backgroundColor: '#5f51fb'
	},
	height170: {
		height: helpers.Size('1125', 170)
	},
	height110: {
		height: helpers.Size('1125', 110)
	},
	pad0: {
		padding: 0
	},
	pad20: {
		padding: helpers.Size('1125', 20)
	},
	pad45: {
		padding: helpers.Size('1125', 45)
	},
	padl0: {
		paddingLeft: 0
	},
	pl35: {
		paddingLeft: helpers.Size('1125', 35)
	},
	pl55: {
		paddingLeft: helpers.Size('1125', 55)
	},
	pt10: {
		paddingTop: helpers.Size('1125', 10)
	},
	pt30: {
		paddingTop: helpers.Size('1125', 30)
	},
	pb10: {
		paddingBottom: helpers.Size('1125', 10)
	},
	pb30: {
		paddingBottom: helpers.Size('1125', 30)
	},
	pb50:{
		paddingBottom: helpers.Size('1125', 50)
	},
	mar0: {
		margin: 0
	},
	ml0: {
		marginLeft: 0
	},
	ml5: {
		marginLeft: 5
	},
	ml20: {
		marginLeft: helpers.Size('1125', 20)
	},
	ml40: {
		marginLeft: helpers.Size('1125', 40)
	},
	ml70: {
		marginLeft: helpers.Size('1125', 70)
	},
	mr40: {
		marginRight: helpers.Size('1125', 40)
	},
	mt5: {
		marginTop: 5
	},
	mt25: {
		marginTop: helpers.Size('1125', 25)
	},
	mt55: {
		marginTop: helpers.Size('1125', 55)
	},
	mb15: {
		marginBottom: helpers.Size('1125', 15)
	},
	mb25: {
		marginBottom: helpers.Size('1125', 25)
	},
	mb35: {
		marginBottom: helpers.Size('1125', 35)
	},
	mb50:{
		marginBottom: helpers.Size('1125', 50)
	},
	mb55: {
		marginBottom: helpers.Size('1125', 55)
	},
	mb65: {
		marginBottom: helpers.Size('1125', 65)
	},
	mb72:{
		marginBottom: helpers.Size('1125', 72)
	},
	mb80:{
		marginBottom: helpers.Size('1125', 80)
	},
	mb100: {
		marginBottom: helpers.Size('1125', 100)
	},
	mb200: {
		marginBottom: helpers.Size('1125', 200)
	},
	hideDiv: {
		opacity: 0
	},
	removeDiv: {
		display: 'none'
	},
	selectText: {
		position: 'absolute'
	},
	sliderButton: {
		width: helpers.Size('1125', 26),
		height: helpers.Size('1125', 26),
		borderRadius: helpers.Size('1125', 13),
		backgroundColor: '#c3c7d6'
	},
	sliderButtonSelected: {
		backgroundColor: '#fd5387'
	},
	latoBold: {
		fontFamily: 'Lato-Bold'
	},
	latoBlack: {
		fontFamily: 'Lato-Black'
	},
	latoMedium: {
		fontFamily: 'Lato-Medium'
	},
	latoHeavy: {
		fontFamily: 'Lato-Heavy'
	},
	latoRegular: {
		fontFamily: 'Lato-Regular_2'
	},
	latoItalic: {
		fontFamily: 'Lato-Italic_2'
	},
	latoLight: {
		fontFamily: 'Lato-Light_2'
	},
	radius45: {
		borderRadius: 45
	},
	radius5: {
		borderRadius: 5
	},
	radius3: {
		borderRadius: 3
	},
	border0:{
		borderWidth: 0
	},
	singupStep: {
		width: helpers.Size('1125', 130),
		height: helpers.Size('1125', 130),
		borderRadius: helpers.Size('1125', 65),
		backgroundColor: '#e5e7f0'
	},
	stepsBorder: {
		position: 'absolute',
		width: helpers.Size('1125', 730),
		height: helpers.Size('1125', 16),
	},
	singupStepCurrent: {
		backgroundColor: '#5f51fb'
	},
	singupStepDone: {
		backgroundColor: '#fd5387'
	},
	mainInput: {
		borderBottomWidth: 2,
		borderColor: '#e5e7f0'
	},
	noBackground: {
		backgroundColor: 'transparent'
	},
	borderZero: {
		borderWidth: 0
	},
	inputIcon: {
		position: 'absolute',
		right: 0,
		bottom: 13
	},
	confirmationIcon: {
		width: helpers.Size('1125', 522),
		height: helpers.Size('1125', 522),
	},
	forgetIcon: {
		width: helpers.Size('1125', 686),
		height: helpers.Size('1125', 551),
	},
	tintgray: {
		tintColor: '#677294'
	},
	tintBlue: {
		tintColor: '#5f51fb'
	},
	homeIcon: {
		width: helpers.Size('1125', 72),
		height: helpers.Size('1125', 64),
	},
	offersIcon: {
		width: helpers.Size('1125', 73),
		height: helpers.Size('1125', 43),
	},
	profileIcon: {
		width: helpers.Size('1125', 49),
		height: helpers.Size('1125', 45),
	},
	redeemIcon: {
		width: helpers.Size('1125', 58),
		height: helpers.Size('1125', 73),
	},
	receiptIcon: {
		width: helpers.Size('1125', 65),
		height: helpers.Size('1125', 52),
	},
	tabBar: {
		borderTopWidth: 0,
		paddingTop: helpers.Size('1125', 40),
		paddingBottom: helpers.Size('1125', 40),
		height: helpers.Size('1125', 200),
	},
	menuIcon: {
		width: helpers.Size('1125', 75),
		height: helpers.Size('1125', 75),
	},
	boxShadow: {
		shadowColor: "#fff",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	bigBoxShadow: {
		shadowColor: "#fff",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.36,
		shadowRadius: 6.68,

		elevation: 11,
	},
	// smallBoxShadow: {
	// 	shadowColor: "#fff",
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 1,
	// 	},
	// 	shadowOpacity: 0.20,
	// 	shadowRadius: 1.41,

	// 	elevation: 2,
	// },
	smallBoxShadow: {
		shadowOffset: {
			width: 100,
			height: 30,
		},
		shadowColor: "#fff",
		shadowOpacity: 0.1,
		elevation: 5,backgroundColor : "#fff"
	},

	halfCard: {
		width: '47%'
	},
	fullCard: {
		width: '96%'
	},
	halfCardMargin:{
		marginLeft: '1%',
		marginRight: '1%',
	},
	fullCardMargin:{
		marginLeft: '2%',
		marginRight: '2%',
	},
	serviceCard: {
		height: helpers.Size('1125', 295),
		overflow: 'hidden',
		borderWidth: 1,
		borderColor: 'transparent',
	},
	serviceImage: {
		height: helpers.Size('1125', 151),
		minWidth: helpers.Size('1125', 165),
	},
	offerCard: {
		width: helpers.Size('1125', 905),
		height: helpers.Size('1125', 680),
		overflow: 'hidden',
		borderRadius: 5,

	},
	offerImage: {
		height: helpers.Size('1125', 500),
	},
	offerTextBox: {
		height: helpers.Size('1125', 180),
		paddingHorizontal: helpers.Size('1125', 50),

	},
	offerExpire: {
		width: helpers.Size('1125', 130),
	},
	OffersListCard: {
		height: helpers.Size('1125', 925),
		overflow: 'hidden',
		borderRadius: 5,
	},
	offerListImage: {
		height: helpers.Size('1125', 595),
	},
	offerListBox: {
		height: helpers.Size('1125', 330),
	},
	locationIcon: {
		width: helpers.Size('1125', 82),
		height: helpers.Size('1125', 107),
	},
	badgeIcon: {
		width: helpers.Size('1125', 135),
		height: helpers.Size('1125', 134),
	},
	shadowStyle: {overflow: 'hidden', borderWidth: 1, borderColor: '#fff'},
	voucherBack: {
		height: helpers.Size('1125', 253),
	},
	disable: {
		opacity: 0.5
	},
	barCode: {
		width: helpers.Size('1125', 767),
		height: helpers.Size('1125', 155),
	},
	dotted: {
		width: helpers.Size('1125', 693),
		height: helpers.Size('1125', 6),
	},
	voucherShare: {
		width: helpers.Size('1125', 63),
		height: helpers.Size('1125', 63),
	},
	voucherHelp: {
		width: helpers.Size('1125', 66),
		height: helpers.Size('1125', 66),
	},
	redeemModal: {
		width: helpers.Size('1125', 990),
		height: helpers.Size('1125', 560),
		flex: 0,
		marginTop:(height - helpers.Size('1125', 560)) / 2
	},
	editIcon: {
		width: helpers.Size('1125', 46),
		height: helpers.Size('1125', 46),
	},
	groupListIcon: {
		width: helpers.Size('1125', 582),
		height: helpers.Size('1125', 582),
	},
	creditCardIcon: {
		width: helpers.Size('1125', 79),
		height: helpers.Size('1125', 49),
	},
	scanBox: {
		height: helpers.Size('1125', 370),
	},
	cameraIconBox: {
		width: helpers.Size('1125', 214),
		height: helpers.Size('1125', 214),
		borderRadius: helpers.Size('1125', 107),
	},
	cameraIcon: {
		width: helpers.Size('1125', 99),
		height: helpers.Size('1125', 87),
	},
	logoutIcon: {
		width: helpers.Size('1125', 126),
		height: helpers.Size('1125', 126),
	},
	menuProfile: {
		width: helpers.Size('1125', 61),
		height: helpers.Size('1125', 70),
	},
	menuReset: {
		width: helpers.Size('1125', 87),
		height: helpers.Size('1125', 76),
	},
	menuNotification: {
		width: helpers.Size('1125', 54),
		height: helpers.Size('1125', 68),
	},
	menuPayment: {
		width: helpers.Size('1125', 79),
		height: helpers.Size('1125', 49),
	},
	menuRT: {
		width: helpers.Size('1125', 79),
		height: helpers.Size('1125', 66),
	},
	menuTerms: {
		width: helpers.Size('1125', 57),
		height: helpers.Size('1125', 79),
	},
	menuPrivacy: {
		width: helpers.Size('1125', 65),
		height: helpers.Size('1125', 84),
	},
	notiBack: {
		width: helpers.Size('1125', 74),
		height: helpers.Size('1125', 74),
		borderRadius: helpers.Size('1125', 37),
	},
	AddCardModal: {
		width: helpers.Size('1125', 958),
		height: helpers.Size('1125', 1600),
		flex: 0,
		marginTop:(height - helpers.Size('1125', 1600)) / 2
	},
	editProfile: {
		width: helpers.Size('1125', 74),
		height: helpers.Size('1125', 74),
	},
	historyBox: {
		borderColor: '#e5e7f0',
		borderBottomWidth: 1
	},
	verifyCode: {
		width: helpers.Size('1125', 130),
		height: helpers.Size('1125', 170),
		backgroundColor: '#e5e7f0'
	},
	underline: {textDecorationLine: 'underline'},
	stepsDot: {
		width: helpers.Size('1125', 24),
		height: helpers.Size('1125', 24),
		borderRadius: helpers.Size('1125', 12),
		backgroundColor: '#a9a7fa'
	},
	stepsBox: {
		borderColor: '#a4a2fa',
		borderTopWidth: 1
	},
	step1: {
		width: helpers.Size('1125', 386),
		height: helpers.Size('1125', 632),
	},
	step2: {
		width: helpers.Size('1125', 386),
		height: helpers.Size('1125', 1235),
	},
	step3: {
		width: helpers.Size('1125', 501),
		height: helpers.Size('1125', 845),
	},
	step4: {
		width: helpers.Size('1125', 399),
		height: helpers.Size('1125', 741),
	},
	cameraStep: {
		width: helpers.Size('1125', 521),
		height: helpers.Size('1125', 521),
	},
	liBullet: {
		width: helpers.Size('1125', 24),
		height: helpers.Size('1125', 24),
		borderRadius: helpers.Size('1125', 37),
		marginLeft: helpers.Size('1125', 90),
	},
	profilePic: {
		width: helpers.Size('1125', 212),
		height: helpers.Size('1125', 212),
		borderRadius: helpers.Size('1125', 106),
	},
	notifyBox: {
		width: helpers.Size('1125', 122),
		height: helpers.Size('1125', 122),
		borderRadius: helpers.Size('1125', 60),
		borderWidth: 1,
		borderColor: '#e5e7f0',
	},
	notifyIcon: {
		width: helpers.Size('1125', 80),
		height: helpers.Size('1125', 80),
	},
	submitReceipt: {
		width: helpers.Size('1125', 238),
		height: helpers.Size('1125', 238),
		borderRadius: helpers.Size('1125', 119),
		backgroundColor: '#fb749f',
		position: 'absolute',
		bottom: helpers.Size('1125', 100),
		zIndex:999
	},
	submitCamere: {
		width: helpers.Size('1125', 108),
		height: helpers.Size('1125', 94),
	},
	splashlogo:{
		width: helpers.Size('1125', 550),
		height: helpers.Size('1125', 390),
	},
	serviceDetailIcon:{
		width: helpers.Size('1125', 230),
		height: helpers.Size('1125', 165),
	},
	countblue:{
		color: '#5f51fb'
	},
})

export default Styles