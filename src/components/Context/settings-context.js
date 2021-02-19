import React, { useState } from 'react';

const LANGUAGES = {
  English: "English",
  Ukrainian: "Ukrainian",
  Russian: "Russian",
}

const initialState = {
  switchReminders: false,
  switchConnectedGC: false,
  switchHealth: false,
  selectedLanguage: "English",
};

const SettingsContext = React.createContext(initialState);

function SettingsProvider({ children }) {
  const [switchReminders, setSwitchReminders] = useState(initialState.switchReminders);
  const [switchConnectedGC, setSwitchConnected] = useState(initialState.switchConnectedGC);
  const [switchHealth, setSwitchHealth] = useState(initialState.switchHealth);
  const [selectedLanguage, setLanguage] = useState(initialState.selectedLanguage);



  const changeReminderSwitch = () => {
    setSwitchReminders(prevState => !prevState);
  };
  const changeConnectedSwitch = () => {
    setSwitchConnected(prevState => !prevState);
  };
  const changeHealthSwitch = () => {
    setSwitchHealth(prevState => !prevState);
  };
  const changeLanguage = (language) => {
    setLanguage(LANGUAGES[language])
  };

  return (
    <SettingsContext.Provider value={{
      switchHealth, switchConnectedGC, switchReminders,
      selectedLanguage,
      changeReminderSwitch, changeConnectedSwitch, changeHealthSwitch, changeLanguage
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
