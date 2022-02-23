import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import foods from '../../fake-db/foods'
import { Divider } from 'react-native-elements'

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map(({ title, description, price, image }, index) => {
        return (
          <View key={index}>
            <View style={styles.container}>
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
    </ScrollView>
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
