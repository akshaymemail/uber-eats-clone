import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { Fragment } from 'react'
import EmptyCart from '../../components/cart/EmptyCart'
import { useSelector } from 'react-redux'
import ViewCart from '../../components/details/ViewCart'
import MenuItems from '../../components/details/MenuItems'

export default function Cart({ navigation, route }) {
  const { cartItems } = useSelector((state) => state.cart)
  return (
    <View style={styles.screen}>
      <Title title="Carts" />
      {cartItems.length === 0 ? (
        <EmptyCart navigation={navigation} />
      ) : (
        <Fragment>
          <MenuItems foods={cartItems} isCheckbox={false} />
          <ViewCart
            cartItems={cartItems}
            name="Mirchi Bazar"
            navigation={navigation}
          />
        </Fragment>
      )}
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
