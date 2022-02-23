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
import RestaurantsItems from '../components/RestaurantsItems'
import categoriesList from '../fake-db/categories'
import restaurants from '../fake-db/restaurants'

export default function Home() {
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories categories={categoriesList} />
        <RestaurantsItems restaurants={restaurants} />
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
