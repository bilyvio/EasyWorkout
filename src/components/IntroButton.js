import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../screens/intro_screen1/styles';

const IntroButton = (props) => {
  const { buttonBar, buttonText } = styles;
  return (
    <TouchableOpacity style={buttonBar} onPress={props.onPress}>
      <Text style={buttonText}>
        Next
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default IntroButton;
