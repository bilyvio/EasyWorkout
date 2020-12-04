import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const customFonts = {
  Freshman: require('./assets/fonts/Freshman.ttf'),
};

export default function App() {

  const [loaded] = useFonts(customFonts);

  // @TODO add loading indicator instead of null here
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.grey}>Welcome to EasyWorkout Application </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  grey: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Freshman',
  },
});
