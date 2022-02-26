import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../screens/home/Home'
import Details from '../../screens/home/Details'
import OrderPlaced from '../../screens/home/OrderPlaced'

export default function HomeTab() {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailsScreen" component={Details} />
      <Stack.Screen name="OrderPlacedScreen" component={OrderPlaced} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
