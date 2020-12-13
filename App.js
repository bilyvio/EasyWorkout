import { useFonts } from 'expo-font';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoComponent from './src/components/VideoComponent/VideoComponent';
import CameraContainer from './src/screens/camera/Camera';
import Details from './src/screens/details/Details';
import Home from './src/screens/home/Home';

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

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
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
              height: 70,
              backgroundColor: '#EE4733',
              elevation: 3
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
