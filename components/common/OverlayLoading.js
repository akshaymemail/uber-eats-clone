import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

export default function OverlayLoading({}) {
  return (
    <View style={styles.screen}>
      <LottieView
        source={require('../../assets/animations/scanner.json')}
        speed={2}
        style={{
          height: 250,
          width: 250,
        }}
        autoPlay
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    width: '100%',
  },
})
