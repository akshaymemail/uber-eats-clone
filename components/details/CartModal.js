import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import OrderItem from './OrderItem'
import COLORS from '../../constants/colors'
import { getTotalCartItem, getTotalCartPrice } from '../../helpers/details'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from 'react-native-elements'
import db from '../../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { emptyCartItems } from '../../redux/cart/actions'

export default function CartModal({ modal, setModal, name }) {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const addOrderToFirebase = async () => {
    try {
      const orderRef = await addDoc(collection(db, 'orders'), {
        name,
        items: cartItems,
        total: getTotalCartPrice(cartItems),
        date: new Date().toISOString(),
      })
      console.log('Order is created with : ', orderRef.id)
      dispatch(emptyCartItems())
      setModal(false)
    } catch (error) {
      console.log(e)
    }
  }
  return (
    <Modal
      visible={modal}
      animationType="slide"
      onRequestClose={() => setModal(!modal)}
      transparent={true}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{name}</Text>
            <TouchableOpacity onPress={() => setModal(!modal)}>
              <Ionicons name="ios-close" size={40} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <OrderItem cartItems={cartItems} />
            <SubTotal cartItems={cartItems} />
            <CheckOutButton
              cartItems={cartItems}
              addOrderToFirebase={addOrderToFirebase}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

const SubTotal = ({ cartItems }) => {
  return (
    <View style={styles.subtotalContainer}>
      <Text>Subtotal</Text>
      <Text> ₹ {getTotalCartPrice(cartItems)}</Text>
    </View>
  )
}

const CheckOutButton = ({ cartItems, addOrderToFirebase }) => {
  return (
    <View style={styles.checkoutButton}>
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
      <TouchableOpacity onPress={addOrderToFirebase}>
        <Text style={styles.text}> Checkout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.foreground,
    height: Dimensions.get('window').height / 1.5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.black,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    marginVertical: 50,
    padding: 20,
    borderRadius: 40,
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
