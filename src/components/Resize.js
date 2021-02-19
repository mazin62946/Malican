import React from 'react';
import {Dimensions} from 'react-native';
const helpers = {
    Size: function(windowSize, fontSize){
		return (fontSize / windowSize) * Dimensions.get('window').width;
    },
    Top: function(totalheight,height) {
    	return (totalheight - height) / 2;
    },
}

export default helpers;
