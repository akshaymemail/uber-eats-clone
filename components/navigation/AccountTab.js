import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Account from '../../screens/account/Account'

export default function AccountTab() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Account"
    >
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
