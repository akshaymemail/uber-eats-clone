import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cart from '../../screens/cart/Cart'

export default function CartTab() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CartScreen"
    >
      <Stack.Screen name="CartScreen" component={Cart} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
