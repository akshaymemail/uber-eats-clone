import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import foods from '../../fake-db/foods'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCard } from '../../redux/cart/actions'

export default function MenuItems() {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  console.log(cartItems)
  const checkBoxHandler = (state, item) => {
    console.log(state)
    const { id } = item
    if (state) {
      dispatch(addToCart(item))
    } else {
      dispatch(removeFromCard(id))
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((item, index) => {
        const { title, description, price, image } = item
        return (
          <View key={index}>
            <View style={styles.container}>
              <Checkbox onPress={(state) => checkBoxHandler(state, item)} />
              <MenuItemInfo
                title={title}
                description={description}
                price={price}
              />
              <MenuItemImage image={image} />
            </View>
            <Divider />
          </View>
        )
      })}
      <Divider style={{ marginTop: 100 }} />
    </ScrollView>
  )
}

const Checkbox = ({ onPress }) => {
  return (
    <BouncyCheckbox
      size={40}
      fillColor="green"
      unfillColor="white"
      iconStyle={{ borderColor: 'green' }}
      onPress={(state) => onPress(state)}
      bounceEffect={1}
      bounceFriction={0.5}
    />
  )
}

const MenuItemInfo = ({ title, description, price }) => {
  return (
    <View style={{ justifyContent: 'space-evenly' }}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{Number(price).toFixed(2)} INR</Text>
    </View>
  )
}
const MenuItemImage = ({ image }) => {
  return <Image style={styles.image} source={{ uri: image }} />
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
})
