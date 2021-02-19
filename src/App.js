
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Styles from './styles/style'
import HeaderLogo from './components/HeaderLogo'
import HeaderMenu from './components/HeaderMenu'

// Navigators
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import DrawerContainer from './components/DrawerContainer'


import Home from './classes/Home'
import Offer from './classes/Offer'
import OfferDetail from './classes/OfferDetail'
import AddReceipt from './classes/AddReceipt'
import Redeem from './classes/Redeem'
import RedeemList from './classes/RedeemList'
import RedeemDetail from './classes/RedeemDetail'
import Profile from './classes/Profile'
export const offersPages = createStackNavigator({
  Offer: { 
    screen: Offer,
    navigationOptions: { headerShown: false }
  },
  OfferDetail: { 
    screen: OfferDetail,
    navigationOptions: { headerShown: false }
  }
}, {
  initialRouteName: 'Offer',
})

export const redeemPages = createStackNavigator({
  Redeem: { 
    screen: Redeem,
    navigationOptions: { headerShown: false }
  },
  RedeemList: { 
    screen: RedeemList,
    navigationOptions: { headerShown: false }
  },
  RedeemDetail: { 
    screen: RedeemDetail,
    navigationOptions: { headerShown: false }
  }
}, {
  initialRouteName: 'Redeem',
})
export const Tabs = createBottomTabNavigator({
  Home: { screen: Home },
  Offer: { 
    screen: offersPages,
    navigationOptions: {
      title: 'Offers',
      tabBarIcon: ({focused}) => (
        <Image style={[Styles.offersIcon, Styles.modeContain, Styles.tintgray, (focused) ? Styles.tintBlue : {}]} source={require('../assets/offers.png')} />
      ),
      tabBarOptions: { 
        activeTintColor: '#5f51fb',
        inactiveTintColor: '#677294',
        labelStyle: [Styles.font30, Styles.latoMedium],
        style: [Styles.tabBar, Styles.bigBoxShadow]
      }
    } 
  },
  AddReceipt: { screen: AddReceipt },
  Redeem: { 
    screen: redeemPages,
    navigationOptions: {
      title: 'Redeem',
      tabBarIcon: ({focused}) => (
        <Image style={[Styles.redeemIcon, Styles.modeContain, Styles.tintgray, (focused) ? Styles.tintBlue : {}]} source={require('../assets/redeem.png')} />
      ),
      tabBarOptions: { 
        activeTintColor: '#5f51fb',
        inactiveTintColor: '#677294',
        labelStyle: [Styles.font30, Styles.latoMedium],
        style: [Styles.tabBar, Styles.bigBoxShadow]
      }
    }
  },
  Profile: { screen: Profile },
}, {
  order: ['Home','Offer','AddReceipt','Redeem','Profile']
})


// export const Stack = createStackNavigator({
//   Home: { 
//     screen: Tabs,
//     navigationOptions: {
//       title: '',
//       headerLeft: () => (<HeaderLogo />),
//       headerRight: () => (<HeaderMenu />)
//     }
//   }
// }, {
//   initialRouteName: 'Home',
// })


// export const Drawer = createAppContainer(createDrawerNavigator({
//   Home: { 
//     screen: Stack 
//   }
// }))


const Drawer_ = createDrawerNavigator({
  Home: { 
    screen: Tabs 
  },
  Payment: { 
    screen: Payment,
    navigationOptions: { headerShown: false }
  },
  AddCard: { 
    screen: AddCard,
    navigationOptions: { headerShown: false }
  },
  PaymentList: { 
    screen: PaymentList,
    navigationOptions: { headerShown: false }
  },
  Notification: { 
    screen: Notification,
    navigationOptions: { headerShown: false }
  },
  ResetPassword: { 
    screen: ResetPassword,
    navigationOptions: { headerShown: false }
  },
  ChangePassword: { 
    screen: ChangePassword,
    navigationOptions: { headerShown: false }
  },
  TermsCondition: {
    screen: TermsCondition,
    navigationOptions: { headerShown: false }
  },
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: { headerShown: false }
  }
},
{
  drawerWidth: "100%",
  contentComponent: DrawerContainer
}
)


import LangugaeChange from './classes/LangugaeChange'
import Start from './classes/Start'
import Signup from './classes/Signup'
import Confirmation from './classes/Confirmation'
import Signin from './classes/Signin'
import EditProfile from './classes/EditProfile'
import Group from './classes/Group'
import GroupList from './classes/GroupList'
import AddMember from './classes/AddMember'
import Payment from './classes/Payment'
import PaymentList from './classes/PaymentList'
import AddCard from './classes/AddCard'
import Notification from './classes/Notification'
import ResetPassword from './classes/ResetPassword'
import Reset from './classes/Reset'
import ChangePassword from './classes/ChangePassword'
import TermsCondition from './classes/TermsCondition'
import PrivacyPolicy from './classes/PrivacyPolicy'
import ServiceDetail from './classes/ServiceDetail'

export const Drawer = createAppContainer(createStackNavigator({
  LangugaeChange: { 
    screen: LangugaeChange,
    navigationOptions: { headerShown: false }
  },
  Start: { 
    screen: Start,
    navigationOptions: { headerShown: false }
  },
  Signup: { 
    screen: Signup,
    navigationOptions: { headerShown: false }
  },
  Confirmation: { 
    screen: Confirmation,
    navigationOptions: { headerShown: false }
  },
  Signin: { 
    screen: Signin,
    navigationOptions: { headerShown: false }
  },
  Reset: { 
    screen: Reset,
    navigationOptions: { headerShown: false }
  },
  Home: { 
    // screen: Tabs,
    screen: Drawer_,
    navigationOptions: { headerShown: false }
  },
  ServiceDetail: { 
    screen: ServiceDetail,
    navigationOptions: { headerShown: false }
  },
  EditProfile: { 
    screen: EditProfile,
    navigationOptions: { headerShown: false }
  },
  Group: { 
    screen: Group,
    navigationOptions: { headerShown: false }
  },
  GroupList: { 
    screen: GroupList,
    navigationOptions: { headerShown: false }
  },
  AddMember: { 
    screen: AddMember,
    navigationOptions: { headerShown: false }
  }
}, {
  initialRouteName: 'LangugaeChange',
}))