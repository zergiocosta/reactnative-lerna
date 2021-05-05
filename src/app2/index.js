import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppTwoScreenOne, AppTwoScreenTwo } from './components'

const Stack = createStackNavigator()

const AppTwo = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="AppTwoScreenOne" component={AppTwoScreenOne} />
      <Stack.Screen name="AppTwoScreenTwo" component={AppTwoScreenTwo} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppTwo