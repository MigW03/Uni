import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Ionicons name="arrow-back" size={24} color="#232323" />
      </TouchableOpacity>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => auth().signOut()}>
        <Text>Fazer logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
