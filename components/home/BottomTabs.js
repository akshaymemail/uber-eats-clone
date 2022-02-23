import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
import { FontAwesome5 } from '@expo/vector-icons'

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  )
}

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.tabItem}>
      <FontAwesome5 name={icon} size={30} />
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.foreground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  tabItem: {
    alignItems: 'center',
    margin: 5,
  },
})
