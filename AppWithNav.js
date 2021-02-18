import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Quicksand_700Bold, Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import { ThemeContext } from './src/components/theme-context';

import Intro from './src/screens/intro_screen1/intro_screen1';
import Intro2 from './src/screens/intro_screen2/intro_screen2';
import Intro3 from './src/screens/intro_screen3/intro_screen3';
import CameraContainer from './src/screens/camera_screen/camera_screen';
import Details from './src/screens/video_screen/video_screen';
import SettingsComponent from './src/screens/settings_screen/settings_screen';

import { CameraTitle } from './src/components/CameraTitle/styles';
import Support from './src/screens/support_screen/support_screen';
import { Drawer_Content } from './src/components/Drawer_Content/Drawer_Content';

const Drawer = createDrawerNavigator();
function CameraScreen({ navigation }) {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawer_Content {...props} />}>
      <Drawer.Screen name="WorkOut" component={CameraContainer} />
      <Drawer.Screen name="settings" component={SettingsComponent} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function AppWithNav() {

  const [loaded] = useFonts({ Quicksand_500Medium, Quicksand_700Bold });
  const [isVideoActive, setIsVideoActive] = useState(true);

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
        <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
