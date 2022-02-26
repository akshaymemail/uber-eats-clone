import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import EmptyCart from '../../components/cart/EmptyCart'

export default function Cart({ navigation, route }) {
  return (
    <View style={styles.screen}>
      <Title title="Carts" />
      <EmptyCart navigation={navigation} />
    </View>
  )
}

const Title = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    padding: 20,
    marginTop: StatusBar.currentHeight + 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
