import React from 'react';
import {
    Text, View, Image, ImageBackground
} from 'react-native';
import { styles } from './styles';
import IntroButton2 from '../../components/IntroButton2';

const Intro2 = ({ navigation }) => {
  return (
      <View style={styles.container}>
      <ImageBackground source={require('../../../assets/images/intro2_mockup_red.png')} style={styles.image}>
          <Text style={styles.textBar}>Have a good health</Text>
          <Text style={styles.lowTextBar}>
              <Text>
              Warning!{"\n"}
              Read the contraindications for each simulator in detail.{"\n"}
              Application administrators are not responsible
              for any injuries you may receive.{"\n"}
              If you agree, click "start"
              </Text>
          </Text>
          <IntroButton2
              onPress={() => navigation.navigate('Intro3')}
              title="Next"
            />
      </ImageBackground>
      </View>
  );
};

export default Intro2;
