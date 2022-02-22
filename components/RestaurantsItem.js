import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function RestaurantsItem() {
  return (
    <TouchableOpacity style={styles.content} activeOpacity={0.8}>
      <RestaurantsImage />
      <RestaurantsInfo />
    </TouchableOpacity>
  )
}

const RestaurantsImage = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-829462,resizemode-1,msid-82666514/industry/services/hotels-/-restaurants/staggered-lockdowns-start-to-bite-battered-restaurants.jpg',
        }}
      />
      <TouchableOpacity style={styles.favorite}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={30}
          color="#ffffff"
        />
      </TouchableOpacity>
    </View>
  )
}

const RestaurantsInfo = () => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>Hotel Rajdarbar</Text>
        <Text style={styles.time}>00 : 25 m</Text>
      </View>
      <View>
        <Text style={styles.rating}>4.5</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 5,
    backgroundColor: '#ffffff',
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
