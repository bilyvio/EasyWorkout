import React, {useState} from 'react';
import {
  Text, View, Image, Button, TouchableOpacity, Switch, ScrollView, Animated
} from 'react-native';
import { styles } from './styles';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import DropDownItem from 'react-native-drop-down-item'
import AnimatedEvent from 'react-native-web/dist/vendor/react-native/Animated/AnimatedEvent';
import Icon from 'react-native-vector-icons/FontAwesome5';



const Settings_component = ({ navigation }) => {

  const [isSwitchEnabledReminders, setSwitchReminders] = useState(false)
  const [isSwitchEnabledConnected, setSwitchConnected] = useState(false)
  const [isSwitchEnabledHealth, setSwitchHealth] = useState(false)
  const IC_ARR_DOWN = require('../../../assets/icons/ic_arr_down.png');
  const IC_ARR_UP = require('../../../assets/icons/ic_arr_up.png');

  const state = {
    contents: [
      {
        title: "Title 1",
        body: "Hi. I love this component. What do you think?"
      },
    ]
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
              <TouchableOpacity>
                <Text>blood</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>orange</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>honey</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>mint</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>unicorn</Text>
              </TouchableOpacity>
            </Animated.View>
          </DropDownItem>
        </ScrollView>
      </View>
    </View>

  );
};

export default Settings_component;
