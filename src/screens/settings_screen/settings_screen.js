import React, {useState} from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch, ScrollView, Animated
} from 'react-native';
import { styles } from './styles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownItem from 'react-native-drop-down-item'



const Settings_component = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false)
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false)
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false)
  const IC_ARR_DOWN = require('../../../assets/icons/ic_arr_down.png');
  const IC_ARR_UP = require('../../../assets/icons/ic_arr_up.png');

  const Circle = ({style, color}) => {
    return <View style={{...style.circle, backgroundColor: color}}/>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsRow}>
        <Text style={styles.labelStyle}>Reminders</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledReminders}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchReminders(value)}
        />
      </View>
      <View style={{...styles.settingsRow, top:'30%'}}>
        <Text style={styles.labelStyle}>Connected     google calendar</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledConnected}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchConnected(value)}
        />
      </View>
      <View style={{...styles.settingsRow, top:'32%'}}>
        <Text style={styles.labelStyle}>Apple Health</Text>
        <ToggleSwitch
          isOn={isSwitchEnabledHealth}
          onColor="#EE4733"
          offColor="#A4A2AA"
          size="large"
          onToggle={value => setSwitchHealth(value)}
        />
      </View>

      {/*<DropDownPicker*/}
      {/*  items={[*/}
      {/*    {label: 'blood', value: 'blood'},*/}
      {/*    {label: 'orange', value: 'orange'},*/}
      {/*    {label: 'honey', value: 'honey'},*/}
      {/*    {label: 'mint', value: 'mint'},*/}
      {/*    {label: 'unicorn', value: 'unicorn'},*/}
      {/*    {label: 'Change the theme', value: 'Change the theme', disabled: true},*/}
      {/*  ]}*/}
      {/*  itemStyle={{*/}
      {/*    fontFamily: 'Quicksand_700Bold',*/}
      {/*    fontSize: 18,*/}
      {/*    color: '#000000'*/}

      {/*  }}*/}
      {/*  defaultValue={'Change the theme'}*/}
      {/*  placeholder="Change the theme"*/}
      {/*  placeholderStyle={{*/}
      {/*    fontFamily: 'Quicksand_700Bold',*/}
      {/*    fontSize: 18,*/}
      {/*    textAlign: 'left',*/}
      {/*    color: '#707070'*/}
      {/*  }}*/}
      {/*  containerStyle={{height: 60}}*/}
      {/*  style={{ top: '37%',*/}
      {/*    backgroundColor: '#f2f2f3',*/}
      {/*    paddingTop: '3%',*/}
      {/*    paddingBottom: '5%',*/}
      {/*    marginLeft: '3%',*/}
      {/*    marginRight: '3%' }}*/}
      {/*  dropDownStyle={{ backgroundColor: '#FFFFFF' }}*/}


      {/*/>*/}
      <View style={{...styles.settingsRow, top:'35%'}}>
        <ScrollView
          style={{ alignSelf: 'stretch' }}
          scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
          onScroll={() => {
            Animated.timing(new Animated.Value(1),
              {
                toValue: 1,
                duration: 500,
                useNativeDriver: false //make it as false
              }).start();
          }}
        >
          <DropDownItem
            contentVisible={false}
            useNativeDriver={true}
            invisibleImage={IC_ARR_DOWN}
            visibleImage={IC_ARR_UP}
            header={
              <View>
                <Text style={styles.labelStyle}>Change the theme</Text>
              </View>
            }
          >
            <Animated.View>
              <TouchableOpacity style={styles.themeLineView}>
                <Text style={styles.themeName}>blood</Text>
                <Circle style={styles} color={'#EE4733'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView}>
                <Text style={styles.themeName}>orange</Text>
                <Circle style={styles} color={'#FF773D'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView}>
                <Text style={styles.themeName}>honey</Text>
                <Circle style={styles} color={'#FEE599'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView}>
                <Text style={styles.themeName}>mint</Text>
                <Circle style={styles} color={'#00E682'}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.themeLineView}>
                <Text style={styles.themeName}>unicorn</Text>
                <Circle style={styles} color={'#4634A7'}/>
              </TouchableOpacity>
            </Animated.View>
          </DropDownItem>
        </ScrollView>
      </View>
    </View>

  );
};

export default Settings_component;
