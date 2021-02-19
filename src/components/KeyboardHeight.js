import React from 'react';
import { View, Keyboard, Dimensions, Platform } from 'react-native';

var {height, width} = Dimensions.get('window');
var _keyboardWillShowSubscription;
var _keyboardWillHideSubscription;
height = height;

export default class KeyboardHeight extends React.Component {
  componentDidMount() {
    _keyboardWillShowSubscription = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardWillShow(e));
    _keyboardWillHideSubscription = Keyboard.addListener('keyboardDidHide', (e) => this._keyboardWillHide(e));
  }
  componentWillUnmount() {
    _keyboardWillShowSubscription.remove();
    _keyboardWillHideSubscription.remove();
  }
  _keyboardWillShow(e) {
  	this.props.getHeight(height - e.endCoordinates.height)
    //this.setState({height: height - e.endCoordinates.height});
  }
  _keyboardWillHide(e) {
  	this.props.getHeight(height)
    //this.setState({height: height});
  }
  render() {
    return (<View></View>)
  }
}