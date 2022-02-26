import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Browse from '../../screens/browse/Browse'

export default function BrowseTab() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Browse"
    >
      <Stack.Screen name="Browse" component={Browse} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
