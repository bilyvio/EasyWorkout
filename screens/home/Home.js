import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button} from 'react-native';
import { styles } from  './styles'

const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Text style={styles.grey}>Welcome to EasyWorkout Application </Text>
          <Button
            title="Go to Camera"
            onPress={() => navigation.navigate('Camera')}
          />
      </View>
    );
};

export default Home;
