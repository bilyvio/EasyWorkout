import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const CameraControls = ({ navigation }) => {

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.camera}>
        <Icon name="camera" size={50} color="#a4a2aa" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu} onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#a4a2aa" />
      </TouchableOpacity>
    </View>
  );
};

export default CameraControls;
