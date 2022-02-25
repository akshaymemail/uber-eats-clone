import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import { StatusBar } from 'expo-status-bar'
import MenuItems from '../components/details/MenuItems'
import COLORS from '../constants/colors'
import ViewCart from '../components/details/ViewCart'
import { useDispatch, useSelector } from 'react-redux'
import * as Actions from '../redux/cart/actions'
import { getTotalCartPrice } from '../helpers/details'
import { collection, addDoc } from 'firebase/firestore'
import db from '../firebase/firebase'
import CartModal from '../components/details/CartModal'
import OverlayLoading from '../components/common/OverlayLoading'

export default function Details({ route, navigation }) {
  const { params } = route
  const { name, image_url, price, categories, rating, review_count } = params
  const time = '35-40 min'
  const dispatch = useDispatch()

  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

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
  const onPlaceOrder = useCallback(() => {
    setLoading(true)
    setModal(false)
    const totalPrice = getTotalCartPrice(cartItems)
    dispatch(Actions.emptyCartItems())
    addDoc(collection(db, 'orders'), {
      name,
      items: cartItems,
      total: totalPrice,
      date: new Date().toISOString(),
    })
      .then((res) => {
        setTimeout(() => {
          setLoading(false)
          navigation.navigate('OrderPlaced', {
            orderId: res.id,
            total: totalPrice,
            restaurant: name,
          })
        }, 2000)
      })
      .catch((err) => console.log(err))
  }, [])
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
      <ViewCart cartItems={cartItems} modal={modal} setModal={setModal} />
      <CartModal
        modal={modal}
        setModal={setModal}
        name={name}
        cartItems={cartItems}
        onPlaceOrder={onPlaceOrder}
      />
      {loading && <OverlayLoading />}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.foreground,
    flex: 1,
  },
})
