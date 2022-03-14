import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Register() {
  return (
    <View style={styles.screen}>
      <Text>Register Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
