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

import Tab from './Tab';

const theme = 'light';

export default function TabContainer({
  state,
  descriptors,
  navigation,
  position,
}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const {options} = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <Tab
            title={label}
            onPress={onPress}
            focus={isFocused}
            key={route.key}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors[theme].background,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
