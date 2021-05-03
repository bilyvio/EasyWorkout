import React from 'react';
import {
    Text, View, Image, Button, ImageBackground
} from 'react-native';
import { styles } from './styles';
import IntroButton3 from '../../components/IntroButton3';
import IntroButton2 from "../../components/IntroButton2";
import { ThemeContext } from '../../components/Context/theme-context';
import colors from '../../constants/colors';

const Intro3 = ({ navigation }) => {
    const {
        theme, bgThemeColor, fontThemeColor, buttonTextColor, bgThemeImage3
    } = React.useContext(ThemeContext);
    const textColor = theme === 'honey' ? buttonTextColor : colors.white
    return (
      <View style={styles.container}>
          <ImageBackground source={bgThemeImage3} style={styles.image}>
              <View style={styles.titleView}>
                <Text style={{...styles.textBar, color:fontThemeColor}}>How to use</Text>
              </View>
              <View style={styles.textView}>
                  <View style={styles.highTextView}>
                  <Text style={styles.lowTextBar}>Welcome to</Text>
                  <Text style={styles.lowTextBar}>EasyWorkout Application!</Text>
                  </View>
                  <View style={styles.lowTextView}>
                      <Text style={{...styles.lowerTextBar, color:fontThemeColor}}>
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
                      backgroundColor={bgThemeColor}
                      textColor={textColor}
                  />
              </View>
          </ImageBackground>
      </View>
    );
};

export default Intro3;
