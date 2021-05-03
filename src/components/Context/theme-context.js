import React, { useState } from 'react';
import colors from '../../constants/colors';

const BACKGROUND_IMAGE_INTRO1 = {
  blood: require('../../../assets/images/intro1_mockup_red.png'),
  orange: require('../../../assets/images/intro1_mockuporange.png'),
  honey: require('../../../assets/images/intro1_warmYellow.png'),
  mint: require('../../../assets/images/intro1_mediumSpringGreen.png'),
  unicorn: require('../../../assets/images/intro1_blue_purple.png'),
};

const BACKGROUND_IMAGE_INTRO2 = {
  blood: require('../../../assets/images/intro2_mockup_red.png'),
  orange: require('../../../assets/images/intro2_mockuporange.png'),
  honey: require('../../../assets/images/intro2_warmYellow.png'),
  mint: require('../../../assets/images/intro2_mediumSpringGreen.png'),
  unicorn: require('../../../assets/images/intro2_blue_purple.png'),
};

const BACKGROUND_IMAGE_INTRO3 = {
  blood: require('../../../assets/images/intro3_mockup_red.png'),
  orange: require('../../../assets/images/intro3_mockuporange.png'),
  honey: require('../../../assets/images/intro3_warmYellow.png'),
  mint: require('../../../assets/images/intro3_mediumSpringGreen.png'),
  unicorn: require('../../../assets/images/intro3_blue_purple.png'),
};

const THEME_BG_COLORS = {
  blood: colors.blood,
  orange: colors.orange,
  honey: colors.honey,
  mint: colors.mint,
  unicorn: colors.unicorn,
};

const THEME_FONT_COLORS = {
  blood: '#CC3913',
  orange: '#FF7A00',
  honey: '#995522',
  mint: '#00934B',
  unicorn: '#4634A7',
};

const BUTTON_TEXT_COLORS = {
  blood: '#EC7E61',
  orange: '#ff9c34',
  honey: '#995522',
  mint: '#00BFA5',
  unicorn: '#4634A7',
};

const initialState = {
  theme: 'blood',
  bgThemeColor: colors.blood,
  buttonTextColor: '#EC7E61',
  bgThemeImage1: require('../../../assets/images/intro1_mockup_red.png'),
  bgThemeImage2: require('../../../assets/images/intro2_mockup_red.png'),
  bgThemeImage3: require('../../../assets/images/intro3_mockup_red.png'),
  fontThemeColor: '#CC3913',
  changeTheme: () => {}
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(initialState.theme);
  const [bgThemeColor, setBgThemeColor] = useState(initialState.bgThemeColor);
  const [fontThemeColor, setFontThemeColor] = useState(initialState.fontThemeColor);
  const [buttonTextColor, setButtonTextColor] = useState(initialState.buttonTextColor);
  const [bgThemeImage1, setBgThemeImage1] = useState(initialState.bgThemeImage1);
  const [bgThemeImage2, setBgThemeImage2] = useState(initialState.bgThemeImage2);
  const [bgThemeImage3, setBgThemeImage3] = useState(initialState.bgThemeImage3);



  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setBgThemeColor(THEME_BG_COLORS[newTheme]);
    setFontThemeColor(THEME_FONT_COLORS[newTheme]);
    setButtonTextColor(BUTTON_TEXT_COLORS[newTheme])
    setBgThemeImage1(BACKGROUND_IMAGE_INTRO1[newTheme])
    setBgThemeImage2(BACKGROUND_IMAGE_INTRO2[newTheme])
    setBgThemeImage3(BACKGROUND_IMAGE_INTRO3[newTheme])
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      bgThemeColor, fontThemeColor, buttonTextColor,
      bgThemeImage1, bgThemeImage2, bgThemeImage3,
      changeTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
