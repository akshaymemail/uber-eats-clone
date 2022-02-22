import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantsItem from '../components/RestaurantsItem'

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {new Array(10).fill(0).map((_, index) => {
          return <RestaurantsItem key={index} />
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  content: {
    marginTop: StatusBar.currentHeight + 10,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
})
