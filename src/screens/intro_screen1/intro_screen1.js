import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import { styles } from './styles';
import IntroButton from '../../components/IntroButton';

const Intro = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.navBar}/>
      <Image source={require('/assets/images/back1.png')} style={{width: '100%', height: '100%'}} />
      <Text style={styles.textBar}>EasyWorkout</Text>
      <Text style={styles.lowTextBar}>Being healthy is all, no health is nothing. </Text>
      <Text style={styles.lowerTextBar}>So why do not we start?</Text>
      <IntroButton
        onPress={() => navigation.navigate('Intro2')}
        title="Next"
      />
    </View>
  );
}

export default Intro;
