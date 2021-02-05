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

export default function Register() {
  function logout() {
    auth()
      .signOut()
      .then(() => console.log('usuário saiu'));
  }

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <TouchableOpacity style={styles.touch} onPress={logout}>
        <Text style={styles.touchText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: '#ad270c',
    marginTop: 12,
  },
  touchText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
