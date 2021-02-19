import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'

let iconSize = 25;

export default class DrawerContainer extends React.Component {

  constructor(props) {
    super(props)
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{ backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#aaa', justifyContent: 'flex-end', alignItems: 'center' ,flexDirection: 'row', paddingVertical: 15 }}>
                <TouchableOpacity onPress={() => { this.props.navigation.closeDrawer(); }}>
                    <Image source={require('../../assets/right-arrow.png')} />
                </TouchableOpacity>
            </View>
          <View style={{padding: 30}}>

           
          

            <View style={{flexDirection: 'column', marginBottom: 30}}>
                <Text style={{ fontSize: 40, fontWeight: '900' }}>Hi, Mirza</Text>
                <Text style={{ fontSize: 20, fontWeight: '900' }}>mirza.irtiza@centric.ae</Text>
            </View>





            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
                {/* <Icon name='user' size={iconSize} style={styles.drawerIcon} /> */}
                <Image source={require('../../assets/profile-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >My Account</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/resetpassword.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Reset Password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/notification-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Notifications</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/payment-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Payment Methods</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/tutorial-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Reset Tutorial</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/terms-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Terms & Conditions</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.navSectionStyle}>
              <TouchableOpacity style={styles.drawerMenu} onPress={this.navigateToScreen('HomePage')}>
              <Image source={require('../../assets/privacy-icon.png')} style={styles.drawerIcon} />
                <Text style={styles.navItemStyle} >Privacy Policy</Text>
              </TouchableOpacity>
            </View>
   

        

       
          </View>
        </ScrollView>

        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.drawerMenu}>
            {/* <Icon name='logout' size={iconSize} style={styles.drawerIcon} /> */}
            <Image source={require('../../assets/logout.png')} style={styles.drawerIcon} />
            <Text style={styles.navItemStyle} >Logout</Text>
          </TouchableOpacity>

          <Text>v1.1.5</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  navItemStyle: {
    padding: 15,
    marginLeft: 20,

  },
  navSectionStyle: {
    // marginLeft: 20,
  },

  drawerIcon: {
    color: "grey",
    width: 35,
    height: 35
  },

  drawerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#E0E0E0',
    color: '#003759'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})