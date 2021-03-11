import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {Colors} from '../assets/Colors.json';

import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RadioButtonRN from 'radio-buttons-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Settings({navigation}) {
  useEffect(() => {
    retrieveTheme();
  }, []);

  async function retrieveTheme() {
    try {
      const theme = await AsyncStorage.getItem('theme');
      console.log(theme);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
          <AntDesign
            name="arrowleft"
            size={32}
            color={Colors[theme].headerText}
          />
        </TouchableOpacity>
        <Text style={styles.navText}>Configurações</Text>
      </View>

      <View style={styles.settingsContainer}>
        <View style={styles.themeSetting}>
          <Text style={styles.settingTitle}>Tema do aplicativo</Text>

          <RadioButtonRN
            data={[
              {label: 'Claro', value: 'light'},
              {label: 'Escuro', value: 'dark'},
            ]}
            box={false}
            selectedBtn={(btn) => console.log(btn.value)}
            textColor={Colors[theme].secondaryText}
            activeColor={Colors.blue}
            deactiveColor={Colors[theme].inactiveSelector}
            duration={250}
            textStyle={{fontWeight: 'bold', fontSize: 15}}
            style={{width: '100%', marginLeft: 20, marginTop: 8}}
            circleColor={Colors[theme].normalTodoText}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => auth().signOut()}>
        <MaterialIcons name="logout" color={Colors.blue} size={32} />
        <Text style={styles.logoutText}>Fazer logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme].background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '12%',
    paddingHorizontal: 12,
  },
  navText: {
    color: Colors[theme].headerText,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  logoutButton: {
    backgroundColor: Colors[theme].componentBackground,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
    width: '60%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '6%',
  },
  logoutText: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingTitle: {
    color: Colors[theme].title,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 16,
  },
});
