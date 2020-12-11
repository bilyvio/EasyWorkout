import { Camera } from 'expo-camera';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../screens/camera/styles';

const CameraControls = ({ typeFromProps, setType, navigation }) => {

  return (
    <View style={styles.loadingContainer}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setType(
            typeFromProps === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      >
        <Text style={styles.buttonStyles}> Flip </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CameraControls;
