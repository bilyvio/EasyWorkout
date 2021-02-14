import React, { useState } from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch, ScrollView, Animated
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownItem from 'react-native-drop-down-item';
import { Picker } from 'react-native-web';
import AnimatedEvent from 'react-native-web/dist/vendor/react-native/Animated/AnimatedEvent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './styles';

const SettingsComponent = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false);
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false);
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false);
  const IC_ARR_DOWN = require('../../../assets/icons/ic_arr_down.png');
  const IC_ARR_UP = require('../../../assets/icons/ic_arr_up.png');

  const [theme, setTheme] = useState('White');

  return (
    <View style={styles.container}>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <Switch
          value={isSwitchEnabledReminders}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchReminders(value)}
        />
      </View>
      <View style={{ ...styles.settingsRow, top: '30%' }}>
        <Text style={styles.labelStyle}>Connected     google calendar</Text>
        <Switch
          value={isSwitchEnabledConnected}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchConnected(value)}
        />
      </View>
      <View style={{ ...styles.settingsRow, top: '32%' }}>
        <Text style={styles.labelStyle}>Apple Health</Text>
        <Switch
          value={isSwitchEnabledHealth}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchHealth(value)}
        />
      </View>

      <Picker
        selectedValue={theme}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="White" value="White" />
        <Picker.Item label="Black" value="Black" />
      </Picker>

      {/* <DropDownPicker */}
      {/*  items={[ */}
      {/*    { */}
      {/*      label: 'THEME 1 LABEL', value: 'THEME_1' */}
      {/*    }, */}
      {/*    { label: 'THEME 2', value: 'THEME_2' } */}
      {/*  ]} */}
      {/*  defaultValue={theme} */}
      {/*  containerStyle={{ height: 40 }} */}
      {/*  style={{ backgroundColor: '#fafafa' }} */}
      {/*  itemStyle={{ */}
      {/*    justifyContent: 'flex-start' */}
      {/*  }} */}
      {/*  dropDownStyle={{ backgroundColor: '#fafafa' }} */}
      {/*  onClose={(item) => setTheme(item)} */}
      {/* /> */}
    </View>

  );
};

export default SettingsComponent;
