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
import { useSelector } from 'react-redux'
import { getTotalCartItem, getTotalCartPrice } from '../../helpers/details'
import CartModal from './CartModal'

export default function ViewCart({ navigation, name }) {
  const { cartItems } = useSelector((state) => state.cart)
  const [modal, setModal] = useState(false)
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
      <CartModal modal={modal} setModal={setModal} name={name} />
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
