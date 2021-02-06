import React, { useState, useEffect } from 'react';
import {
  View, Text, Button, Dimensions
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { usePermissions } from 'expo-permissions';
import { useFocusEffect } from '@react-navigation/core';
import CameraControls from '../../components/cameraControls/CameraControls';
import VideoComponent from '../../components/VideoComponent/VideoComponent';

import styles from './styles';

const CameraContainer = ({ navigation }) => {
  const [permission, askForPermission] = usePermissions(Permissions.CAMERA, { ask: true });
  const DETAILS_NAVIGATION_TIMEOUT = 5000;
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isVideoActive, setIsVideoActive] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      setIsVideoActive(true);

      const navigateTimeout = setTimeout(() => {
        setIsVideoActive(false);
        navigation.navigate('Details');
      }, DETAILS_NAVIGATION_TIMEOUT);

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions

        clearTimeout(navigateTimeout);
        setIsVideoActive(false);
      };
    }, [])
  );

  if (!permission || permission.status !== 'granted') {
    return (
      <View>
        <Text>Permission is not granted</Text>
        <Button title="Grant permission" onPress={askForPermission} />
      </View>
    );
  }

  return (
    <View style={styles.flexContainer}>
      {/* <Camera style={styles.flexContainer} type={type} /> */}
      {isVideoActive && <VideoComponent />}
      <CameraControls setType={setType} typeFromProps={type} navigation={navigation} />
    </View>
  );
};

export default CameraContainer;
