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

export default function Tab(props) {
  const focus = props.focus;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={focus ? styles.focusedText : styles.touchText}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  focusedText: {
    color: Colors[theme].navText.active,
    fontWeight: 'bold',
    fontSize: 26,
  },
  touchText: {
    fontWeight: 'bold',
    color: Colors[theme].navText.inactive,
    fontSize: 18,
  },
});
