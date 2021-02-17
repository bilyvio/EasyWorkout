import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../screens/intro_screen2/styles';

const IntroButton2 = (props) => {
  const { buttonBar, buttonText } = styles;
  return (
    <TouchableOpacity style={buttonBar} onPress={props.onPress}>
      <Text style={{...buttonText, color:props.textColor}}>
        Next
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default IntroButton2;
