import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LogBox } from 'react-native';
import Intro from './src/screens/intro_screen1/intro_screen1';
import Intro2 from './src/screens/intro_screen2/intro_screen2';
import Intro3 from './src/screens/intro_screen3/intro_screen3';
import CameraContainer from './src/screens/camera_screen/camera_screen';
import Details from './src/screens/video_screen/video_screen';
import Settings_component from './src/screens/settings_screen/settings_screen';

import { CameraTitle } from './src/components/CameraTitle/styles';
import { Drawer_Content } from './src/components/Drawer_Content/Drawer_Content';

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
    fontFamily: 'Quicksand_700Bold',
    fontSize: 23,
    lineHeight: 25,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
};

const Drawer = createDrawerNavigator();
function CameraScreen({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawer_Content {...props} />}>
      <Drawer.Screen name="WorkOut" component={CameraContainer} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {

  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  const [loaded] = useFonts({ Quicksand_500Medium, Quicksand_700Bold });
  const [isVideoActive, setIsVideoActive] = useState(true);

  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Intro2" component={Intro2} options={{ headerShown: false }} />
        <Stack.Screen name="Intro3" component={Intro3} options={{ headerShown: false }} />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            ...headerConfig,
            title: 'Identified',
            headerStyle: {
              height: 90,
              backgroundColor: '#EE4733',
              elevation: 3
            }
          }}
        />
        <Stack.Screen
          name="settings"
          component={Settings_component}
          options={{
            ...headerConfig,
            title: 'Settings',
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
