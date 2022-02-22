import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#cccccc',
  },
  content: {
    marginTop: StatusBar.currentHeight,
  },
})
