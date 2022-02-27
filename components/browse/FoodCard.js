import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function FoodCard({ foods }) {
  return (
    <View style={styles.container}>
      {foods.map(({ title, image }, i) => {
        return (
          <View style={styles.item} key={i}>
            <FoodItem title={title} image={image} />
          </View>
        )
      })}
    </View>
  )
}

const FoodItem = ({ title, image }) => {
  return (
    <View style={styles.foodItem}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  foodItem: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 170,
    borderColor: '#eeeeee',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
  header: {},
  image: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {},
})
