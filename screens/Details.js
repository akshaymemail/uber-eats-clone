import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import { StatusBar } from 'expo-status-bar'
import MenuItems from '../components/details/MenuItems'
import COLORS from '../constants/colors'
import ViewCart from '../components/details/ViewCart'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/cart/actions'

export default function Details({ route, navigation }) {
  const { params } = route
  const { name, image_url, price, categories, rating, review_count } = params
  const time = '35-40 min'
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const checkBoxHandler = (state, item) => {
    const { id } = item
    if (state) {
      dispatch(addToCart(item))
    } else {
      dispatch(removeFromCart(id))
    }
  }
  return (
    <View style={styles.screen}>
      <StatusBar style="inverted" />
      <About
        name={name}
        image={image_url}
        price={price || 'N/A'}
        categories={categories}
        rating={rating}
        review={review_count}
        time={time}
      />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems cartItems={cartItems} checkBoxHandler={checkBoxHandler} />
      <ViewCart navigation={navigation} name={name} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.foreground,
    flex: 1,
  },
})
