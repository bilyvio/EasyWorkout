import React from 'react';
import { Text, View, Image, Button} from 'react-native';
import { styles } from './styles';
import IntroButton2 from '../../components/IntroButton2';


const Intro2 = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.navBar}/>
      <Image source={require('/assets/images/back2.png')} style={{width: '100%', height: '100%'}} />
      <Text style={styles.textBar}>Have a good health</Text>
      <Text style={styles.lowTextBar}>
        <Text> Warning! {"\n"}</Text>
        <Text> Read the contraindications for each simulator in{"\n"} detail.</Text>
        <Text>{"\n"}Application administrators are not responsible</Text>
        <Text>{"\n"}for any injuries you may receive.</Text>
        <Text>{"\n"}If you agree, click "start" </Text>
      </Text>
      <IntroButton2
        onPress={() => navigation.navigate('Intro3')}
        title="Next"
      />
    </View>
  );
}

export default Intro2;
