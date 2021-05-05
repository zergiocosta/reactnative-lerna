import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppOneScreenOne, AppOneScreenTwo } from './components'

const Stack = createStackNavigator()

const AppOne = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="AppOneScreenOne" component={AppOneScreenOne} />
      <Stack.Screen name="AppOneScreenTwo" component={AppOneScreenTwo} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppOne