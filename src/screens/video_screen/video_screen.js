import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { Video } from 'expo-av';
import ViewMoreText from 'react-native-view-more-text';
import LightVideo from '../../../assets/videos/butterfly.mp4';
import styles from './styles';

const customFonts = {
  QuicksandBold: require('../../../assets/fonts/Quicksand-Bold.ttf'),
  QuicksandVariable: require('../../../assets/fonts/Quicksand-VariableFont_wght.ttf'),
};

const Details = () => {
  const [loaded] = useFonts(customFonts);
  const [isVideoActive, setIsVideoActive] = useState(true);

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>

        {isVideoActive && (
        <Video
          style={{ width: '100%', height: 240, overflow: 'visible' }}
          source={LightVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
        )}
        <View style={styles.margin3}>
          <Text style={styles.nameText}>Butterfly</Text>
          <Text style={styles.contraindicationsText}>Description</Text>
          <ViewMoreText
            numberOfLines={7}
            textStyle={{ textAlign: 'left' }}
          >
            <Text style={styles.descriptionText}>
              The emphasis in the exercise is on training the division of the chest in the center. Provides for the construction
              outstretched arms, and having a combined design, adapted to perform
              exercises for the posterior delta.
            </Text>
          </ViewMoreText>
          <Text style={styles.contraindicationsText}>Execution technique</Text>
          <ViewMoreText
            numberOfLines={7}
            textStyle={{ textAlign: 'left' }}
          >
            <Text style={styles.descriptionText}>
              Sit on the exercise machine, straighten your back. Hold hands on the side handles of the simulator and
              raise your hands. The arms should be placed parallel to the floor. Movements should
              be smooth and slow.
              {' '}
            </Text>
          </ViewMoreText>
          <Text />
          <ViewMoreText
            numberOfLines={7}
            textStyle={{ textAlign: 'left' }}
          >
            <Text style={styles.descriptionText}>* On the exhale, raise your arms and stay at the end point for a few seconds.</Text>
          </ViewMoreText>
          <ViewMoreText
            numberOfLines={7}
            textStyle={{ textAlign: 'left' }}
          >
            <Text style={styles.descriptionText}>* On the inhale, return to the starting position. </Text>
          </ViewMoreText>
        </View>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, styles.margin1]}>
          <FontAwesome name="home" size={30} color="#a4a2aa" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.margin2]}>
          <Entypo name="dots-three-horizontal" size={24} color="#a4a2aa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Details;
