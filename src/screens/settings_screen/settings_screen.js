import React, {useState} from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch
} from 'react-native';
import { styles } from './styles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'


const Settings_component = ({ navigation }) => {

  const [isSwitchEnabled, setSwitch] = useState(false)
  const [isSwitchEnabled1, setSwitch1] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{paddingTop: '3%', paddingBottom: '5%', marginLeft: '5%', marginRight: '5%', justifyContent:'space-between', alignItems: 'center',
        flexDirection: 'row', borderBottomWidth: 0.5}}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <ToggleSwitch
          isOn={isSwitchEnabled}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitch(value)}
        />
      </View>
      <View style={{padding: '5%', justifyContent:'space-between', alignItems: 'center',  flexDirection: 'row'}}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <ToggleSwitch
          isOn={isSwitchEnabled1}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitch1(value)}
        />
      </View>

    </View>

  );
};

export default Settings_component;
