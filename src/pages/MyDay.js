import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {Colors} from '../assets/Colors.json';

const theme = 'light';

export default function MyDay() {
  return (
    <View style={styles.container}>
      <Text>MyDay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors[theme].background,
  },
});
