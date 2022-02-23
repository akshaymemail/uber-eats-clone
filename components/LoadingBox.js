import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

export default function LoadingBox() {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" color={COLORS.black} />
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
