import React, {useEffect} from 'react';
import { LogBox } from 'react-native';
import AppWithNav from './AppWithNav';
import { ThemeProvider } from './src/components/Context/theme-context';
import { SettingsProvider } from './src/components/Context/settings-context';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <ThemeProvider>
      <SettingsProvider>
        <AppWithNav />
      </SettingsProvider>
    </ThemeProvider>
  );
}
