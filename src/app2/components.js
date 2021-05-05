import React from 'react'
import { Button, View, Text } from 'react-native'

const AppTwoScreenOne = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>App 2 Screen 1</Text>
    <Button
      title="Go to screen 2"
      onPress={() => navigation.navigate('AppTwoScreenTwo')}
    />
  </View>
)

const AppTwoScreenTwo = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>App 2 Screen 2</Text>
    <Button
      title="Go to screen 1"
      onPress={() => navigation.navigate('AppTwoScreenOne')}
    />
  </View>
)

export {
  AppTwoScreenOne,
  AppTwoScreenTwo
}