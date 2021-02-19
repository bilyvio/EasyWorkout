import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';

import { Video } from 'expo-av';
import ViewMoreText from 'react-native-view-more-text';
import LightVideo from '../../../assets/videos/butterfly.mp4';
import styles from './styles';
import {useFonts,Quicksand_700Bold,Quicksand_500Medium} from "@expo-google-fonts/quicksand";
import { ThemeContext } from '../../components/Context/theme-context';
import {ScrollView} from "react-native";

const Details = (props) => {
  const [loaded] = useFonts({Quicksand_700Bold,Quicksand_500Medium});
  const [isVideoActive, setIsVideoActive] = useState(true);
  const { bgThemeColor, fontThemeColor } = React.useContext(ThemeContext);

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container} {...props}>
      <View style={{...styles.navBar, backgroundColor: bgThemeColor}}>
        <Text style={styles.sectionTitle}>Identified</Text>
      </View>
      <View>
          {isVideoActive && (
          <Video
            style={{ width: '100%', height: 225, overflow: 'visible' }}
            source={LightVideo}
            rate={1.0}
            volume={1.0}
            isMuted={true}
            resizeMode="contain"
            shouldPlay
            isLooping
          />
          )}
      </View>
      <View style={{justifyContent: 'center', height: '5%'}}>
        <Text style={styles.nameText}>Butterfly</Text>
      </View>
      <ScrollView>
          <Text style={{...styles.contraindicationsText, color: fontThemeColor}}>Description</Text>
          <Text style={styles.descriptionText}>
              The emphasis in the exercise is on training the division of the chest in the center. Provides for the construction
              outstretched arms, and having a combined design, adapted to perform
              exercises for the posterior delta.
          </Text>
          <Text style={{...styles.contraindicationsText, color: fontThemeColor}}>Execution technique</Text>
          <Text style={styles.descriptionText}>
              Sit on the exercise machine, straighten your back. Hold hands on the side handles of the simulator and
              raise your hands. The arms should be placed parallel to the floor. Movements should
              be smooth and slow.
            {'\n'}
          </Text>
          <Text style={styles.descriptionText}>
            * On the exhale, raise your arms and stay at the end point for a few seconds.
          </Text>
          <Text style={styles.descriptionText}>
            * On the inhale, return to the starting position.
          </Text>
        </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, styles.margin1]}
                          onPress={() =>props.navigation.navigate('WorkOut')}
        >
          <FontAwesome name="home" size={30} color="#a4a2aa" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tabItem, styles.margin2]}
                          onPress={() =>props.navigation.openDrawer()}
        >
          <Entypo name="dots-three-horizontal" size={24} color="#a4a2aa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Details;
