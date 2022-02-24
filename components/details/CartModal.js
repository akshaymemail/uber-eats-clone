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
import { getTotalCartPrice } from '../../helpers/details'
import { useSelector } from 'react-redux'

export default function CartModal({ modal, setModal, name }) {
  const { cartItems } = useSelector((state) => state.cart)
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
            <CheckOutButton />
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

const CheckOutButton = () => {
  return (
    <View style={styles.checkoutButton}>
      <Text style={styles.checkoutText}>Checkout</Text>
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
    backgroundColor: COLORS.black,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center',
    marginVertical: 30,
  },
  checkoutText: {
    color: COLORS.white,
    textAlign: 'center',
  },
})
