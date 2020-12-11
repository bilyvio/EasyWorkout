import { useFonts } from 'expo-font';
import React, { Component, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Video } from 'expo-av';
import LightVideo from '../../../assets/videos/Lights.mp4';

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
      <View style={styles.body}>
        <Video
          source={videoSrc || LightVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rightNav: {
    flexDirection: 'row'
  },
  setColorWhite: {
    color: '#FFFFFF'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  navBarText: {
    fontSize: 20,
    fontStyle: 'normal',
    position: 'absolute',
    lineHeight: 25,
    height: 25,
    left: '37.33%',
    right: '-49.07%',
    top: 47,
    fontFamily: 'QuicksandBold',
  },
  navItem: {
    marginTop: 30,
    marginLeft: 25
  },
  body: {
    marginTop: 90,
    flex: 1
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 73,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  margin1: {
    marginRight: 50
  },
  margin2: {
    marginRight: 30
  },
});
