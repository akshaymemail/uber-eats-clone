import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  StatusBar as Status,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import categoriesList from '../../fake-db/categories'
import Keys from '../../keys/keys'
import { Divider } from 'react-native-elements'
import LoadingBox from '../../components/common/LoadingBox'
import HeaderTabs from '../../components/home/HeaderTabs'
import SearchBar from '../../components/home/SearchBar'
import Categories from '../../components/home/Categories'
import RestaurantsItems from '../../components/home/RestaurantsItems'
import { StatusBar } from 'expo-status-bar'
import SearchBox from '../../components/common/SearchBox'

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState('Delivery')
  const [city, setCity] = useState('hollywood')
  useEffect(() => {
    fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Keys.YELP_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setRestaurants(json.businesses || [])
        setLoading(false)
        setRefreshing(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [refreshing, city])
  if (loading) {
    return <LoadingBox />
  }
  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBox
          placeholder={'New York, Hollywood, etc'}
          onChangeText={(text) => {
            setRefreshing(true)
            setCity(text)
          }}
        />
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
        <RestaurantsItems
          activeTab={activeTab}
          restaurants={restaurants}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <StatusBar style="dark" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  content: {
    marginTop: Status.currentHeight + 10,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
  },
})
