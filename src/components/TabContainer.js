import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

import Tab from './Tab';

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
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
