import React, { useState } from 'react';

const THEME_BG_COLORS = {
  white: '#fff',
  black: '#000',
  red: '#EE4733',
};

const THEME_FONT_COLORS = {
  white: '#000',
  black: '#fff',
  red: '#fff',
};

const initialState = {
  theme: 'red',
  bgThemeColor: '#EE4733',
  fontThemeColor: '#fff',
  changeTheme: () => {}
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('red');
  const [bgThemeColor, setBgThemeColor] = useState(initialState.bgThemeColor);
  const [fontThemeColor, setFontThemeColor] = useState(initialState.fontThemeColor);

  // To toggle between dark and light modes
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setBgThemeColor(THEME_BG_COLORS[newTheme]);
    setFontThemeColor(THEME_FONT_COLORS[newTheme]);
  };

  return (
    <ThemeContext.Provider value={{
      theme, bgThemeColor, fontThemeColor, changeTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
