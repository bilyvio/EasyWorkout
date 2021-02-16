import React, { useState, useEffect } from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch, ScrollView, Animated
} from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownItem from 'react-native-drop-down-item';
import AnimatedEvent from 'react-native-web/dist/vendor/react-native/Animated/AnimatedEvent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeContext } from '../../components/theme-context';
import { styles } from './styles';
import { Picker } from 'react-native'

const SettingsComponent = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false);
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false);
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false);
  const IC_ARR_DOWN = require('../../../assets/icons/ic_arr_down.png');
  const IC_ARR_UP = require('../../../assets/icons/ic_arr_up.png');
  const [selectedLanguage, setLanguage] = useState("English");

  const {
    theme, bgThemeColor, fontThemeColor, changeTheme
  } = React.useContext(ThemeContext);

  console.log(bgThemeColor, fontThemeColor);

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
      <View style={{...styles.settingsRow, top: '5%'}}>
        <Text style={styles.labelStyle}>Languages</Text>
      </View>
      <View style={{...styles.languagesRow, top: '-15%'}}>
        <Picker
          selectedValue = {selectedLanguage}
          style={{ height: 80, width: 100 }}
          mode="dropdown"
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Ukrainian" value="ukrainian" />
          <Picker.Item label="Russian" value="russian" />
        </Picker>
      </View>
      <View style={{ ...styles.settingsRow, top: '2%' }}>
        <Text style={styles.labelStyle}>Connected google calendar</Text>
        <Switch
          value={isSwitchEnabledConnected}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchConnected(value)}
        />
      </View>
      <View style={{ ...styles.settingsRow, top: '6%' }}>
        <Text style={styles.labelStyle}>Apple Health</Text>
        <Switch
          value={isSwitchEnabledHealth}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchHealth(value)}
        />
      </View>

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
