import React, {useState} from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch
} from 'react-native';
import { styles } from './styles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
import DropDownPicker from 'react-native-dropdown-picker';



const Settings_component = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false)
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false)
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false)

  return (
    <View style={styles.container}>
      <View style={{paddingTop: '3%', paddingBottom: '5%', marginLeft: '5%', marginRight: '5%', justifyContent:'space-between', alignItems: 'center',
        flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#a6a6a6'}}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledReminders}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchReminders(value)}
        />
      </View>
      <View style={{top: '30%', paddingTop: '3%', paddingBottom: '5%', marginLeft: '5%', marginRight: '5%', justifyContent:'space-between', alignItems: 'center',
        flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#a6a6a6'}}>
        <Text style={styles.labelStyle}>Connected     google calendar</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledConnected}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchConnected(value)}
        />
      </View>
      <View style={{top: '32%', paddingTop: '3%', paddingBottom: '5%', marginLeft: '5%', marginRight: '5%', justifyContent:'space-between', alignItems: 'center',
        flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#a6a6a6'}}>
        <Text style={styles.labelStyle}>Apple Health</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledHealth}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchConnected(value)}
        />
      </View>

      <DropDownPicker
        items={[
          {label: 'red apple', value: 'usa'},
          {label: 'sweet peach', value: 'uk'},
          {label: 'bright lemon', value: 'france'},
        ]}
        itemStyle={{
          justifyContent: 'center',
          fontFamily: 'Quicksand_700Bold',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 18,
          color: '#000000'

        }}
        placeholder="Change the theme"
        placeholderStyle={{
          fontFamily: 'Quicksand_700Bold',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'left',
          color: '#707070'
        }}
        containerStyle={{height: 60}}
        style={{ top: '37%', backgroundColor: '#f2f2f3', paddingTop: '3%', paddingBottom: '5%', marginLeft: '3%', marginRight: '3%' }}
        dropDownStyle={{ backgroundColor: '#FFFFFF' }}


      />

    </View>

  );
};

export default Settings_component;
