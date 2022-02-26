import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grocery from '../../screens/grocery/Grocery'

export default function GroceryTab() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Grocery"
    >
      <Stack.Screen name="Grocery" component={Grocery} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
