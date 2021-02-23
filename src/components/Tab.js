import {useLinkProps} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {Colors} from '../assets/Colors';

export default function Tab(props) {
  const focus = props.focus;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={focus ? styles.focusedTouch : styles.touch}>
      <Text style={focus ? styles.focusedText : styles.touchText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.light.blue,
  },
  focusedTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: Colors.light.blue,
  },
  focusedText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  touchText: {
    fontWeight: 'bold',
    color: Colors.light.blue,
    fontSize: 15,
  },
});
