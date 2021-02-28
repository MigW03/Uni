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
import {Colors} from '../assets/Colors';

import TabRoutes from '../tabRoutes';
import WelcomeModal from '../components/WelcomeModal';

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.appName}>Uni</Text>
        <TouchableOpacity
          style={styles.settingsTouch}
          onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={40} color={Colors.light.blue} />
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
    backgroundColor: Colors.light.background,
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.light.blue,
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
