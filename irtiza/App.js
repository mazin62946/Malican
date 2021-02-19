
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


import Home from './classes/Home'
import Offer from './classes/Offer'
import AddReceipt from './classes/AddReceipt'
import Redeem from './classes/Redeem'
import Profile from './classes/Profile'

import DrawerContainer from '../src/components/DrawerContainer'

export const Tabs = createBottomTabNavigator({
  Home: { screen: Home },
  Offer: { screen: Offer },
  AddReceipt: { screen: AddReceipt },
  Redeem: { screen: Redeem },
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
  }
},
{
  drawerWidth: "100%",
  contentComponent: DrawerContainer
}
)


import Start from './classes/Start'
import Signup from './classes/Signup'


export const Drawer = createAppContainer(createStackNavigator({
  Start: { 
    screen: Start,
    navigationOptions: { headerShown: false }
  },
  Signup: { 
    screen: Signup,
    navigationOptions: { headerShown: false }
  },
  Home:{
    screen: Drawer_,
    navigationOptions: { headerShown: false }
  },
  Profile:{
      screen: Profile,
      navigationOptions: { headerShown: false }
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    labelStyle:{
      paddingTop: 15,
    }
  }
}))   screen: Bottom,
    navigationOptions:{
      headerShown: false
    }
  },
  Offers: {
    screen: Offers
  },
  Receipt: {
    screen: Receipt
  },
  Redeem:{
    screen: Redeem
  },
  Profile:{
    screen: Profile
  },
  Setting:{
    screen: Setting
  },

 


},



)

export default createAppContainer(navigator)