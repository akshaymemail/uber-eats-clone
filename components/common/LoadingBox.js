import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
import LottieView from 'lottie-react-native'

export default function LoadingBox() {
  return (
    <View style={styles.screen}>
      <LottieView
        source={require('../../assets/animations/loading.json')}
        speed={2}
        autoPlay
      />
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
