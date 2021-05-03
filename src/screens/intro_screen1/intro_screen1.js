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
import { ThemeContext } from '../../components/Context/theme-context';

const Intro = ({ navigation }) => {
  const {
    buttonTextColor, bgThemeImage1
  } = React.useContext(ThemeContext);
    return (
        <ImageBackground source={bgThemeImage1} style={styles.image}>
            <View style={styles.textView}>
                <Text style={styles.titleBar}>EasyWorkout</Text>
                <Text style={styles.textBar}>Being healthy is all, no health is nothing. </Text>
                <Text style={styles.textBar}>So why do not we start?</Text>
            </View>
            <View style={styles.buttonView}>
                <IntroButton
                  onPress={() => navigation.navigate('Intro2')}
                  textColor={buttonTextColor}
                />
            </View>
        </ImageBackground>
    );
};

export default Intro;
