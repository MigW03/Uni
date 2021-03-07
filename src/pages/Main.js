import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../assets/Colors.json';

import TabRoutes from '../tabRoutes';
import WelcomeModal from '../components/WelcomeModal';

const theme = 'light';

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors[theme].background}
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={styles.header}>
        <Text style={styles.appName}>Uni</Text>
        <TouchableOpacity
          style={styles.settingsTouch}
          onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons
            name="settings"
            size={40}
            color={Colors[theme].headerText}
          />
        </TouchableOpacity>
      </View>
      <TabRoutes />
      <WelcomeModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors[theme].background,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors[theme].headerText,
  },
  header: {
    height: '12%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    paddingHorizontal: 30,
  },
});
