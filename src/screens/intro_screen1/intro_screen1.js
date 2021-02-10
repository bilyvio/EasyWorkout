import React from 'react';
import { styles } from './styles';
import IntroButton from '../../components/IntroButton';
import {
    ImageBackground,
    Text,
    SafeAreaView,
    Image,
    View
} from 'react-native';

const Intro = ({ navigation }) => {
  return (
          <ImageBackground source={require('../../../assets/images/back1.png')} style={styles.image}>
              <View style={styles.textView}>
                <Text style={styles.titleBar}>EasyWorkout</Text>
                <Text style={styles.textBar}>Being healthy is all, no health is nothing. </Text>
                <Text style={styles.textBar}>So why do not we start?</Text>
              </View>
              <View style={styles.buttonView}>
                  <IntroButton onPress={() => navigation.navigate('Intro2')}
                  />
              </View>
          </ImageBackground>
  );
};

export default Intro;
