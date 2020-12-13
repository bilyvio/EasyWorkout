import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import { styles } from './styles';
import IntroButton3 from '../../components/IntroButton3';



const Intro3 = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.navBar}/>
      <Image source={require('/assets/images/back3.png')} style={{width: '100%', height: '100%'}} />
      <Text style={styles.textBar}>How to use</Text>
      <Text style={styles.lowTextBar}>
        <Text>         Welcome to{"\n"}</Text>
        <Text>EasyWorkout Application!</Text>
      </Text>
      <Text style={styles.lowerTextBar}>
        It will help you to perform exercises on the simulators technically correctly and safely for your health.
        {"\n"}To do this, point the camera at the
        {"\n"}simulator you need and wait a few
        {"\n"}seconds.
        {"\n"}You can also search for different muscle groups and change the program settings
        {"\n"}in the menu.
      </Text>
      <IntroButton3
        onPress={() => navigation.navigate('Intro3')}
        title="Go to camera"
      />
    </View>
  );
}

export default Intro3;
