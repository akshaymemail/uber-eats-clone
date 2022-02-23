import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import COLORS from '../constants/colors'

export default function RestaurantsItems({ restaurants }) {
  return restaurants.map(({ name, image, stars, deliveryTime }, index) => {
    return (
      <TouchableOpacity key={index} style={styles.content} activeOpacity={0.8}>
        <RestaurantsImage imageUrl={image} />
        <RestaurantsInfo name={name} time={deliveryTime} rating={stars} />
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
        <Text style={styles.rating}>{rating}</Text>
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
  },
  image: {
    width: '100%',
    height: 200,
  },
  favorite: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    alignItems: 'center',
    marginTop: 5,
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
})
