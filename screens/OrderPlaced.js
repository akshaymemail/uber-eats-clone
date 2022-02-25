import { StyleSheet, Text, View, StatusBar as Status } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import LottieView from 'lottie-react-native'
import { StatusBar } from 'expo-status-bar'
import MenuItems from '../components/details/MenuItems'
import foods from '../fake-db/foods'

export default function OrderPlaced({ navigation, route }) {
  const { params } = route
  const { orderId, total, restaurant } = params
  return (
    <View style={styles.screen}>
      <Completed />
      <Info id={orderId} name={restaurant} total={total} />
      <MenuItems foods={foods.slice(0, 2)} isCheckbox={false} />
      <Cooking />
      <StatusBar style="auto" />
    </View>
  )
}

const Completed = () => {
  return (
    <View style={styles.checkmark}>
      <LottieView
        source={require('../assets/animations/check-mark.json')}
        speed={0.8}
        style={{
          height: 100,
          width: 250,
        }}
        autoPlay
      />
    </View>
  )
}

const Info = ({ id, name, total }) => {
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.orderId}>ORDER ID : {id}</Text>
      <Text style={styles.text}>
        Your order at {name} for ₹ {total} has been placed.
      </Text>
    </View>
  )
}

const Cooking = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <LottieView
        source={require('../assets/animations/cooking.json')}
        style={{
          height: 200,
          width: 200,
        }}
        autoPlay
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  checkmark: {
    marginTop: Status.currentHeight + 5,
  },
  infoContainer: {},
  text: {
    fontSize: 30,
    fontWeight: '500',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  orderId: {
    fontSize: 20,
    textAlign: 'center',
  },
})
