import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

export default function Login() {
  async function googleLogin() {
    try {
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log({error});
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2a64bb" />
      <View style={styles.Header}></View>

      <TouchableOpacity
        onPress={() =>
          googleLogin().then(() => console.log('Fez login com google'))
        }
        style={styles.touch}>
        <Text style={styles.googleTouch}>Login com Google</Text>
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
    padding: 8,
    backgroundColor: '#ff2534',
    borderRadius: 8,
  },
  googleTouch: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
