import { Text, View } from 'react-native';
import React from 'react';
import styles from './styles'
export function CameraTitle() {
  return (
    <View style={styles.navBar}>
      <Text style={styles.sectionTitle}>Scan the simulator</Text>
    </View>
  );
}
