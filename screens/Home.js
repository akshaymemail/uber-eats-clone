import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantsItems from '../components/RestaurantsItems'
import categoriesList from '../fake-db/categories'
import { YELP_API_KEY } from '../keys/keys'
import LoadingBox from '../components/LoadingBox'

export default function Home() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
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
        console.log('refreshing: ', refreshing)
        setRestaurants(json.businesses || [])
        setLoading(false)
        setRefreshing(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [refreshing])
  if (loading) {
    return <LoadingBox />
  }
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs />
        <SearchBar city={city} setCity={setCity} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => setRefreshing(true)}
          />
        }
      >
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
