import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import COLORS from '../../constants/colors'

export default function EmptyCart({ navigation }) {
  return (
    <View style={styles.container}>
      <CartAnimation />
      <CartInfo />
      <CartButton navigation={navigation} />
    </View>
  )
}

const CartAnimation = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/animations/empty-cart.json')}
      style={{
        height: 250,
        width: 250,
      }}
      autoPlay
    />
  )
}

const CartInfo = () => {
  return (
    <View style={styles.textContent}>
      <Text style={styles.title}>Add items to start a cart</Text>
      <Text style={styles.subtitle}>
        Once you add items from a restaurant or store, your cart will appear
        here
      </Text>
    </View>
  )
}

const CartButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => navigation.navigate('Home')}
    >
      <Text style={styles.buttonText}>Start Shopping</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContent: {},
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 10,
  },

  buttonContainer: {
    backgroundColor: COLORS.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: '700',
  },
})
