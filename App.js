import { useFonts } from 'expo-font';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoComponent from './src/components/VideoComponent/VideoComponent';
import CameraContainer from './src/screens/camera/Camera';
import Details from './src/screens/details/Details';
import Home from './src/screens/home/Home';

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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={CameraContainer} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
