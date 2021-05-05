import React from 'react'
import { Button, View, Text } from 'react-native'

const AppOneScreenOne = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>App 1 Screen 1</Text>
    <Button
      title="Go to screen 2"
      onPress={() => navigation.navigate('AppOneScreenTwo')}
    />
  </View>
)

const AppOneScreenTwo = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>App 1 Screen 2</Text>
    <Button
      title="Go to screen 1"
      onPress={() => navigation.navigate('AppOneScreenOne')}
    />
  </View>
)

export {
  AppOneScreenOne,
  AppOneScreenTwo
}