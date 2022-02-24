import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../../constants/colors'

export default function RestaurantsItems({
  activeTab,
  restaurants,
  navigation,
}) {
  if (restaurants.length === 0) {
    return (
      <View style={styles.noRestaurants}>
        <AntDesign name="frowno" size={100} color={COLORS.primary} />
        <Text style={styles.notFoundText}>Sorry! No restaurants found.</Text>
      </View>
    )
  }
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.transactions.includes(activeTab.toLowerCase())
  )

  return filteredRestaurants.map((restaurant, index) => {
    const {
      name,
      image_url,
      rating,
      review,
      deliveryTime = '35-40 min',
    } = restaurant
    return (
      <TouchableOpacity
        key={index}
        style={styles.content}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', restaurant)}
      >
        <RestaurantsImage imageUrl={image_url} />
        <RestaurantsInfo name={name} time={deliveryTime} rating={rating} />
      </TouchableOpacity>
    )
  })
}

const RestaurantsImage = ({ imageUrl }) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <TouchableOpacity style={styles.favorite}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={30}
          color={COLORS.white}
        />
      </TouchableOpacity>
    </View>
  )
}

const RestaurantsInfo = ({ name, time, rating }) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View>
        <Text style={styles.rating}>{rating.toFixed(1)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 5,
    backgroundColor: COLORS.foreground,
    paddingVertical: 20,
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  favorite: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
    fontSize: 13,
  },
  rating: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 20,
  },
  noRestaurants: {
    marginTop: 50,
    alignItems: 'center',
  },
  notFoundText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
})
