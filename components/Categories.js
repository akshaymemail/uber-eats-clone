import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
const items = [
  {
    title: 'Pick-up',
    image: require('../assets/images/shopping-bag.png'),
  },
  {
    title: 'Bakery Items',
    image: require('../assets/images/bread.png'),
  },
  {
    title: 'Fast Food',
    image: require('../assets/images/fast-food.png'),
  },
  {
    title: 'Deals',
    image: require('../assets/images/deals.png'),
  },
  {
    title: 'Coffee & Tea',
    image: require('../assets/images/coffee.png'),
  },
  {
    title: 'Desserts',
    image: require('../assets/images/desserts.png'),
  },
  {
    title: 'Soft Drinks',
    image: require('../assets/images/soft-drink.png'),
  },
]

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map(({ title, image }, index) => {
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => console.log(title)}
          >
            <Image style={styles.image} source={image} />
            <Text style={styles.title} key={index}>
              {title}
            </Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  item: {
    margin: 15,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
