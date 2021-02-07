import React from 'react';
import {
  Text, View, Image
} from 'react-native';
import { styles } from './styles';
import IntroButton2 from '../../components/IntroButton2';

const Intro2 = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.navBar} />
      <Image source={require('../../../assets/images/intro2_mockup_red.png')} style={{ width: '100%', height: '100%' }} />
      <Text style={styles.textBar}>Have a good health</Text>
      <Text style={styles.lowTextBar}>
        <Text>
          Warning!
          Read the contraindications for each simulator in detail.
          Application administrators are not responsible
          for any injuries you may receive.
          If you agree, click "start"
        </Text>
      </Text>
      <IntroButton2
        onPress={() => navigation.navigate('Intro3')}
        title="Next"
      />
    </View>
  );
};

export default Intro2;
