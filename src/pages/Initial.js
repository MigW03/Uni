import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Initial({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text style={styles.appName}>Uni</Text>
      </View>
      <View style={styles.navView}>
        <View style={styles.touchView}>
          <Text style={styles.touchTitle}>Já possui conta?</Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.touchText}>Faça seu login</Text>
            <Icon name="chevron-right" size={28} color="#f9f9f9" />
          </TouchableOpacity>
        </View>

        <View style={styles.touchView}>
          <Text style={styles.touchTitle}>Não fez seu cadastro?</Text>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.touchText}>Crie sua conta!</Text>
            <Icon name="chevron-right" size={28} color="#f9f9f9" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ededed',
  },
  upperView: {
    flex: 4,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#3473d1',
  },
  navView: {
    flex: 3,
    backgroundColor: 'purple',
    justifyContent: 'space-around',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: '#FFF',
    elevation: 9,
  },
  touchView: {
    padding: 15,
  },
  touchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '10%',
    marginBottom: 6,
  },
  touch: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3473d1',
    paddingHorizontal: 12,
    borderRadius: 14,
    marginTop: 8,
    alignSelf: 'center',
    paddingVertical: 12,
  },
  touchText: {
    color: '#f9f9f9',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
