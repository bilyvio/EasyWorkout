import { Camera } from 'expo-camera';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CameraControls = ({ typeFromProps, setType, navigation }) => {

  return (
    <View style={styles.tabBar}>

      <TouchableOpacity style={styles.tabItem}>
        <Icon name="camera" size={50} color="#a4a2aa"/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Icon name="more-horiz" size={50} color="#a4a2aa"/>
      </TouchableOpacity>

      {/*<TouchableOpacity*/}
      {/*  style={styles.buttonContainer}*/}
      {/*  onPress={() => {*/}
      {/*    navigation.navigate('Home');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Text style={styles.buttonStyles}> Go where you want </Text>*/}
      {/*</TouchableOpacity>*/}

    </View>
  );
};

export default CameraControls;
