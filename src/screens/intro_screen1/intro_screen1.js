import React from 'react';
import { styles } from './styles';
import IntroButton from '../../components/IntroButton';
import {
    ImageBackground,
    Text,
    SafeAreaView,
    Image
} from 'react-native';

const Intro = ({ navigation }) => {
  return (
      <SafeAreaView style={styles.container}>
          <ImageBackground source={require('../../../assets/images/intro1_mockup_red.png')} style={styles.image}>
              <Text style={styles.titleBar}>EasyWorkout</Text>
              <Text style={styles.textBar}>Being healthy is all, no health is nothing. </Text>
              <Text style={styles.textBar}>So why do not we start?</Text>
              <IntroButton
                  onPress={() => navigation.navigate('Intro2')}
              />
          </ImageBackground>
      </SafeAreaView>
  );
};

export default Intro;
