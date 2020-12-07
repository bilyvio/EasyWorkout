import React from 'react';
import { Text, View, Button } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { styles } from './styles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.grey}>Welcome to EasyWorkout Application </Text>
      <Button
        title="Go to Camera"
        onPress={() => navigation.navigate('Camera')}
      />
      <CustomButton />
    </View>
  );
};

export default Home;
