import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function OrderPlaced({ navigation, route }) {
  const { params } = route
  console.log(params)
  const { orderId, total, restaurant } = params
  return (
    <View>
      <Text>{orderId}</Text>
      <Text>{total}</Text>
      <Text>{restaurant}</Text>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
