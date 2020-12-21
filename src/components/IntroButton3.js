import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../screens/intro_screen3/styles';

const IntroButton3 = (props) => {
  const { buttonBar, buttonText } = styles;
  return (
    <TouchableOpacity style={buttonBar} onPress={props.onPress}>
      <Text style={buttonText}>
        Go to Camera
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default IntroButton3;
