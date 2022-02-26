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
      initialRouteName="GroceryScreen"
    >
      <Stack.Screen name="GroceryScreen" component={Grocery} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
