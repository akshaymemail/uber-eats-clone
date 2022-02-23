import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import { StatusBar } from 'expo-status-bar'
import MenuItems from '../components/details/MenuItems'
import COLORS from '../constants/colors'

export default function Details() {
  return (
    <View style={styles.screen}>
      <About />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.foreground,
    flex: 1,
  },
})
