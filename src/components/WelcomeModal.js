import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
  Modal,
} from 'react-native';
import {Colors} from '../assets/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function WelcomeModal() {
  const [userHasData, setUserHasData] = useState(true);
  const {uid} = auth().currentUser;

  function checkUserData() {
    return firestore()
      .collection('users')
      .doc(uid)
      .onSnapshot((data) => {
        if (!data.data()) {
          setUserHasData(false);
        }
      });
  }

  function createUserData() {
    return (
      firestore().collection('users').doc(uid).set({
        notes: [],
        todos: [],
      }),
      setUserHasData(true)
    );
  }

  useEffect(() => {
    checkUserData();
  }, []);

  return (
    <Modal
      visible={!userHasData}
      animationtype="fade"
      statusBarTranslucent
      transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <FontAwesome
            name="user"
            color={Colors.light.blue}
            size={80}
            style={styles.icon}
          />
          <Text style={styles.title}>Bem vindo(a) ao Uni !!</Text>
          <Text style={styles.description}>
            Agradeçemos por escolher o Uni, esperamos que aprecie o aplicativo!
          </Text>

          <TouchableOpacity
            style={styles.welcomeButton}
            onPress={createUserData}>
            <Text style={styles.buttonText}>Começar a usar</Text>
            <Entypo name="check" color={Colors.white} size={28} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030b9',
  },
  icon: {
    marginTop: -70,
    backgroundColor: Colors.light.background,
    borderRadius: 60,
    padding: 12,
    textAlign: 'center',
    aspectRatio: 1,
    marginBottom: 0,
  },
  modalContent: {
    width: '90%',
    aspectRatio: 0.8,
    borderRadius: 8,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -45,
  },
  description: {
    maxWidth: '80%',
    fontSize: 17,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.light.lightText,
  },
  welcomeButton: {
    backgroundColor: Colors.light.blue,
    padding: 10,
    borderRadius: 6,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
