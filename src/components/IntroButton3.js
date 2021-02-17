 import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../screens/intro_screen3/styles';

const IntroButton3 = (props) => {
  const { buttonBar, buttonText } = styles;
  return (
    <TouchableOpacity style={{...buttonBar, backgroundColor: props.backgroundColor}} onPress={props.onPress}>
      <Text style={{...buttonText, color: props.textColor}}>
        Go to Camera
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default IntroButton3;
