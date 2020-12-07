import React from 'react';
import { Button, Text, View } from 'react-native';

const Camera = ({ navigation }) => {
  return (
    <View>
      <Text>Camera</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default Camera;
