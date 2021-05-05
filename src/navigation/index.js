import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppOne from '../app1'
import AppTwo from '../app2'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AppOne" component={AppOne} />
        <Tab.Screen name="AppTwo" component={AppTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}