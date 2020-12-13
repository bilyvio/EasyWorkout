import { useFonts } from 'expo-font';
import React, { Component, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Video } from 'expo-av';
import LightVideo from '../../../assets/videos/Lights2.mp4';
import styles from './styles';

const customFonts = {
  QuicksandBold: require('../../../assets/fonts/Quicksand-Bold.ttf'),
  QuicksandVariable: require('../../../assets/fonts/Quicksand-VariableFont_wght.ttf'),
};

export default function VideoComponent({ videoSrc }) {

  const [loaded] = useFonts(customFonts);

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Video
          style={{ width: 391, height: 714,overflow: 'visible'}}
          source={videoSrc || LightVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={true}
          isLooping
        />
    </View>
  );
}

