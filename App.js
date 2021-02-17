import React, {useEffect} from 'react';
import { LogBox } from 'react-native';
import AppWithNav from './AppWithNav';
import { ThemeProvider } from './src/components/theme-context';

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <ThemeProvider>
      <AppWithNav />
    </ThemeProvider>
  );
}
