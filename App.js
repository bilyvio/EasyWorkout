import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './src/screens/intro_screen1/intro_screen1';
import Intro2 from './src/screens/intro_screen2/intro_screen2';
import Intro3 from './src/screens/intro_screen3/intro_screen3';
import Video_Screen from './src/screens/video_screen/video_screen';
import CameraContainer from './src/screens/camera_screen/camera_screen';
import Details from './src/screens/video_screen/video_screen';

const headerConfig = {
  title: 'Scan the simulator',
  headerStyle: {
    height: 85,
    backgroundColor: '#EE4733',
    elevation: 3
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    top: '5%',
    fontFamily: 'QuicksandBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
}

const customFonts = {
  QuicksandBold: require('./assets/fonts/Quicksand-Bold.ttf'),
  QuicksandVariable: require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
};


const Stack = createStackNavigator();

export default function App() {

  const [loaded] = useFonts(customFonts);
  const [isVideoActive, setIsVideoActive] = useState(true);


  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{headerShown: false}}/>
        <Stack.Screen name="Intro2" component={Intro2} options={{headerShown: false}}/>
        <Stack.Screen name="Intro3" component={Intro3} options={{headerShown: false}}/>
        <Stack.Screen
          name="Camera"
          component={CameraContainer}
          options={{...headerConfig, headerLeft: null}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{...headerConfig, title: 'Identified',
            headerStyle: {
              height: 90,
              backgroundColor: '#EE4733',
              elevation: 3
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
