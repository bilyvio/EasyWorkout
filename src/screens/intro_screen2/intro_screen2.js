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
          <View style={styles.titleView}>
            <Text style={styles.textBar}>Have a good health</Text>
          </View>
          <View style={styles.textView}>
                  <Text style={styles.lowTextBar}>
                  Warning!{"\n"}
                  Read the contraindications for each simulator in detail.{"\n"}
                  Application administrators are not responsible
                  for any injuries you may receive.{"\n"}
                  If you agree, click "start"
                  </Text>
          </View>
          <View style={styles.buttonView}>
          <IntroButton2
              onPress={() => navigation.navigate('Intro3')}
              title="Next"
            />
          </View>
      </ImageBackground>
      </View>
  );
};

export default Intro2;
