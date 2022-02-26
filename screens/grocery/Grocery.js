import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Grocery() {
  return (
    <View style={styles.screen}>
      <Text>Grocery</Text>
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
