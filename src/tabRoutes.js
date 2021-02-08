import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet} from 'react-native';

import MyDay from './pages/MyDay';
import Notes from './pages/Notes';
import Todos from './pages/Todos';
import TabContainer from './components/TabContainer';

const Tab = createMaterialTopTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="MyDay"
      tabBar={(props) => <TabContainer {...props} />}>
      <Tab.Screen
        key="todos"
        name="To-dos"
        component={Todos}
        options={{title: 'Tarefas'}}
      />
      <Tab.Screen
        name="MyDay"
        component={MyDay}
        key="myday"
        options={{title: 'Meu Dia'}}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        key="notes"
        options={{title: 'Notas'}}
      />
    </Tab.Navigator>
  );
}
