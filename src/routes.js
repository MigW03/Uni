import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import Login from './pages/Login';
import Register from './pages/Register';
import Initial from './pages/Initial';
import Main from './pages/Main';

import {SENSITIVE} from '../sensitive';
const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: SENSITIVE.firebase_webId,
});

export default function Routes() {
  const [user, setUser] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (user) {
    console.log(user.email);
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Initial">
        <Stack.Screen
          name="Initial"
          component={Initial}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}
