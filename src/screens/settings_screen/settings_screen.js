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
import colors from '../../constants/colors';
import shortid from "shortid";

function getRandomKey() {
  return shortid.generate();
}

const SettingsComponent = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false);
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false);
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false);
  const IC_ARR_DOWN = require('../../../assets/icons/ic_arr_down.png');
  const IC_ARR_UP = require('../../../assets/icons/ic_arr_up.png');
  const [selectedLanguage, setLanguage] = useState("English");

  const {
    bgThemeColor, fontThemeColor, changeTheme
  } = React.useContext(ThemeContext);

  const Circle = ({style, color}) => {
    return <View style={{...style.circle, backgroundColor: color}}/>;
  };

  return (
    <View style={styles.container}>
      <View style={{...styles.navBar, backgroundColor: bgThemeColor}}>
        <Text style={styles.sectionTitle}>Settings</Text>
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <Switch
          value={isSwitchEnabledReminders}
          trackColor={{ false: '#767577', true: bgThemeColor }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchReminders(value)}
        />
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Languages</Text>
        <Picker
          selectedValue = {selectedLanguage}
          style={{ height: '100%', width: '40%' }}
          mode="dropdown"
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="English" value="english" />
          <Picker.Item label="Ukrainian" value="ukrainian" />
          <Picker.Item label="Russian" value="russian" />
        </Picker>
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Connected google calendar</Text>
        <Switch
          value={isSwitchEnabledConnected}
          trackColor={{ false: '#767577', true: bgThemeColor }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchConnected(value)}
        />
      </View>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Apple Health</Text>
        <Switch
          value={isSwitchEnabledHealth}
          trackColor={{ false: '#767577', true: bgThemeColor }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setSwitchHealth(value)}
        />
      </View>

      <View style={styles.settingsRow} key={getRandomKey()}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          <View>
            <DropDownItem
              contentVisible={false}
              invisibleImage={IC_ARR_DOWN}
              visibleImage={IC_ARR_UP}
              header={
                <View>
                  <Text style={styles.labelStyle}>Change the theme</Text>
                </View>
              }
            >
              <TouchableOpacity style={styles.themeLineView} onPress={()=>{changeTheme('blood')}}>
                <Text style={styles.themeName}>blood</Text>
                <Circle style={styles} color={colors.blood}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView} onPress={()=>changeTheme('orange')}>
                <Text style={styles.themeName}>orange</Text>
                <Circle style={styles} color={colors.orange}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView} onPress={()=>changeTheme('honey')}>
                <Text style={styles.themeName}>honey</Text>
                <Circle style={styles} color={colors.honey}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView} onPress={()=>changeTheme('mint')}>
                <Text style={styles.themeName}>mint</Text>
                <Circle style={styles} color={colors.mint}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView} onPress={()=>changeTheme('unicorn')}>
                <Text style={styles.themeName}>unicorn</Text>
                <Circle style={styles} color={colors.unicorn}/>
              </TouchableOpacity>
            </DropDownItem>
          </View>
        </ScrollView>
      </View>
    </View>

  );
};

export default SettingsComponent;
