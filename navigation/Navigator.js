import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from '../components/navigation/HomeTab'
import AccountTab from '../components/navigation/AccountTab'
import BrowseTab from '../components/navigation/BrowseTab'
import GroceryTab from '../components/navigation/GroceryTab'
import CartTab from '../components/navigation/CartTab'

export default function Navigator() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="HomeTab" component={HomeTab} />
        <Tab.Screen name="BrowseTab" component={BrowseTab} />
        <Tab.Screen name="GroceryTab" component={GroceryTab} />
        <Tab.Screen name="CartTab" component={CartTab} />
        <Tab.Screen name="AccountTab" component={AccountTab} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
