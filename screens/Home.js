import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantsItems from '../components/RestaurantsItems'
import categoriesList from '../fake-db/categories'
import restaurantsList from '../fake-db/restaurants'
import { YELP_API_KEY } from '../keys/keys'

export default function Home() {
  const [restaurants, setRestaurants] = useState(restaurantsList)
  const [city, setCity] = useState('new york')
  useEffect(() => {
    fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}&limit=50`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.businesses)
        setRestaurants(json.businesses || [])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
        <SearchBar city={city} setCity={setCity} />
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
