import React, { useState } from 'react';
import {
  View, Text, Button
} from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { usePermissions } from 'expo-permissions';
import CameraControls from '../../components/cameraControls/CameraControls';

import styles from './styles';

const CameraContainer = ({ navigation }) => {
  const [permission, askForPermission] = usePermissions(Permissions.CAMERA, { ask: true });

  const [type, setType] = useState(Camera.Constants.Type.back);

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
      <Camera style={styles.flexContainer} type={type} />
      <CameraControls setType={setType} typeFromProps={type} navigation={navigation} />
    </View>
  );
};

export default CameraContainer;
