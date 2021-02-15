import React, { Component, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Video } from 'expo-av';
import LightVideo from '../../../assets/videos/Lights.mp4';
import styles from './styles';
import {useFonts, Quicksand_700Bold,Quicksand_500Medium} from "@expo-google-fonts/quicksand";

export default function VideoComponent({ videoSrc }) {

  const [loaded] = useFonts({Quicksand_700Bold,Quicksand_500Medium});

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Video
        style={{ width: 416, height: 737, overflow: 'visible' }}
        source={videoSrc || LightVideo}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping
      />
    </View>
  );
}
