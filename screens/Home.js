import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
        <SearchBar />
        <Categories />
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
    marginTop: StatusBar.currentHeight + 10,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
})
