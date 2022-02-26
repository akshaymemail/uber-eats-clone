import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import React, { Fragment, useState } from 'react'
import COLORS from '../../constants/colors'
import { Divider } from 'react-native-elements'
import { getTotalCartItem, getTotalCartPrice } from '../../helpers/details'
import CartModal from './CartModal'
import OverlayLoading from '../common/OverlayLoading'
import { collection, addDoc } from 'firebase/firestore'
import db from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import * as Actions from '../../redux/cart/actions'

export default function ViewCart({ cartItems, name, navigation }) {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const onPlaceOrder = () => {
    setLoading(true)
    setModal(false)
    const totalPrice = getTotalCartPrice(cartItems)

    addDoc(collection(db, 'orders'), {
      name,
      items: cartItems,
      total: totalPrice,
      date: new Date().toISOString(),
    })
      .then((res) => {
        setTimeout(() => {
          setLoading(false)
          dispatch(Actions.emptyCartItems())
          navigation.navigate('OrderPlacedScreen', {
            orderId: res.id,
            total: totalPrice,
            restaurant: name,
          })
        }, 2000)
      })
      .catch((err) => console.log(err))
  }

  return cartItems.length > 0 ? (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.viewCart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}
          >
            <Text style={styles.text}>{getTotalCartItem(cartItems)}</Text>
            <Divider
              width={2}
              style={{ borderColor: '#424242' }}
              orientation="vertical"
            />
            <Text style={styles.text}> ₹ {getTotalCartPrice(cartItems)}</Text>
            <Divider
              width={2}
              style={{ borderColor: '#424242' }}
              orientation="vertical"
            />
            <TouchableOpacity onPress={() => setModal(!modal)}>
              <Text style={styles.text}> View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CartModal
        modal={modal}
        setModal={setModal}
        name={name}
        cartItems={cartItems}
        onPlaceOrder={onPlaceOrder}
      />
      {loading && <OverlayLoading />}
    </Fragment>
  ) : null
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    bottom: 20,
    justifyContent: 'center',
  },
  viewCart: {
    backgroundColor: COLORS.black,
    borderRadius: 70,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
