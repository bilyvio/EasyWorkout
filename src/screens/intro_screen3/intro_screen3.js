import React from 'react';
import {
    Text, View, Image, Button, ImageBackground
} from 'react-native';
import { styles } from './styles';
import IntroButton3 from '../../components/IntroButton3';
import IntroButton2 from "../../components/IntroButton2";

const Intro3 = ({ navigation }) => {

  return (
      <View style={styles.container}>
          <ImageBackground source={require('../../../assets/images/intro3_mockup_red.png')} style={styles.image}>
              <View style={styles.titleView}>
                <Text style={styles.textBar}>How to use</Text>
              </View>
              <View style={styles.textView}>
                  <View style={styles.highTextView}>
                  <Text style={styles.lowTextBar}>Welcome to</Text>
                  <Text style={styles.lowTextBar}>EasyWorkout Application!</Text>
                  </View>
                  <View style={styles.lowTextView}>
                      <Text style={styles.lowerTextBar}>
                          It will help you to perform exercises on the simulators technically correctly and safely for your health.
                          {'\n'}
                          To do this, point the camera at the
                          {'\n'}
                          simulator you need and wait a few
                          {'\n'}
                          seconds.
                          {'\n'}
                          You can also search for different muscle groups and change the program settings
                          {'\n'}
                          in the menu.
                      </Text>
                  </View>
              </View>
              <View style={styles.buttonView}>
                  <IntroButton3
                      onPress={() => navigation.navigate('Camera')}
                  />
              </View>
          </ImageBackground>
      </View>
  );
};

export default Intro3;
