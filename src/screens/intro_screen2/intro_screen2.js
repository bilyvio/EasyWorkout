import React from 'react';
import {
    Text, View, Image, ImageBackground
} from 'react-native';
import { styles } from './styles';
import IntroButton2 from '../../components/IntroButton2';
import { ThemeContext } from '../../components/theme-context';

const Intro2 = ({ navigation }) => {
  const {
    fontThemeColor, buttonTextColor, bgThemeImage2
  } = React.useContext(ThemeContext);
  return (
      <View style={styles.container}>
      <ImageBackground source={bgThemeImage2} style={styles.image}>
          <View style={styles.titleView}>
            <Text style={{...styles.textBar, color:fontThemeColor}}>Have a good health</Text>
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
              textColor={buttonTextColor}
            />
          </View>
      </ImageBackground>
      </View>
  );
};

export default Intro2;
