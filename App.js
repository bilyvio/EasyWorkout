import React from 'react';
import AppWithNav from './AppWithNav';
import { ThemeProvider } from './src/components/theme-context';

export default function App() {

  return (
    <ThemeProvider>
      <AppWithNav />
    </ThemeProvider>
  );
}
