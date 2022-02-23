import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
const image =
  'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg'
const title = 'Mirchi Restaurants'
const description = 'Biryani, Dosa, Roti, Poha | 200 INR 👤 ( 2323 + )'

export default function About() {
  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  title: {
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
