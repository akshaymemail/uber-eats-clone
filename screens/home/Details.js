import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Divider } from 'react-native-elements'
import About from '../../components/details/About'
import { StatusBar } from 'expo-status-bar'
import MenuItems from '../../components/details/MenuItems'
import COLORS from '../../constants/colors'
import ViewCart from '../../components/details/ViewCart'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../../redux/cart/actions'
import foods from '../../fake-db/foods'

export default function Details({ route, navigation }) {
  const { params } = route
  const { name, image_url, price, categories, rating, review_count } = params
  const time = '35-40 min'
  const dispatch = useDispatch()
  // get cart items form redux
  const { cartItems } = useSelector((state) => state.cart)

  // fires up on press of a food checkbox is checked
  const checkBoxHandler = useCallback((state, item) => {
    const { id } = item
    if (state) {
      dispatch(Actions.addToCart(item))
    } else {
      dispatch(Actions.removeFromCart(id))
    }
  }, [])

  // fires up on press of add to cart button

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
      <MenuItems
        foods={foods}
        cartItems={cartItems}
        checkBoxHandler={checkBoxHandler}
        isCheckbox={true}
      />
      <ViewCart cartItems={cartItems} name={name} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.foreground,
    flex: 1,
  },
})
