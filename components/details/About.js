import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const restaurantInfo = {
  name: 'The Mirchi Restaurant',
  image:
    'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
  price: '500',
  review: '1500',
  rating: '4.5',
  categories: [{ title: 'Biryani' }, { title: 'Pizza' }, { title: 'Burger' }],
}

export default function About({
  name,
  image,
  price,
  categories,
  rating,
  review,
  time,
}) {
  const description =
    categories.map((c) => c.title).join(' • ') +
    ` | ₹ ${price}  👤 ( ${review} + ) | ${time} | ${rating.toFixed(1)}`
  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  name: {
    fontSize: 30,
    fontWeight: '700',
    marginHorizontal: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: '700',
    color: 'gray',
  },
})
