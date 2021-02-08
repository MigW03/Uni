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
    borderColor: '#3473d1',
  },
  focusedTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    backgroundColor: '#3473d1',
  },
  focusedText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  touchText: {
    fontWeight: 'bold',
    color: '#3473d1',
    fontSize: 15,
  },
});
