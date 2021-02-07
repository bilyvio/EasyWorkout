import React, {useState} from 'react';
import {
  Text, View, Image, Button, TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import IntroButton3 from '../../components/IntroButton3';
import { useFonts } from 'expo-font';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'

const customFonts = {
  QuicksandBold: require('../../../assets/fonts/Quicksand-Bold.ttf'),
  QuicksandVariable: require('../../../assets/fonts/Quicksand-VariableFont_wght.ttf'),
};

const Settings_component = ({ navigation }) => {
  const [loaded] = useFonts(customFonts);
  const state = {
    isOnDefaultToggleSwitch: false,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };
  const [isSwitchEnabled, setSwitch] = useState(false)


  function onToggle(isOn) {
    console.log("Changed to " + isOn);
  }


  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity style={[styles.tabItem, styles.margin1]}>
          <FontAwesome name="home" size={30} color="#a4a2aa" />
        </TouchableOpacity>
      </View>
      <ToggleSwitch
        isOn={isSwitchEnabled}
        onColor="#EE4733"
        offColor="#A4A2AA"
        label="Reminders"
        labelStyle={{
          color: "#707070",
          fontFamily: "Quicksand",
          fontStyle: 'normal',
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 22,
          left: "10%"
        }}
        size="large"
        onToggle={value => setSwitch(value)}

      />



    </View>

  );
};

export default Settings_component;
