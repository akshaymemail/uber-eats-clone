import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import { StatusBar } from 'expo-status-bar'

export default function Details() {
  return (
    <View>
      <StatusBar style="inverted" />
      <About />
      <Divider width={2} style={{ marginVertical: 20 }} />
    </View>
  )
}

const styles = StyleSheet.create({})
