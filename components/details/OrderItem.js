import { StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { Divider } from 'react-native-elements'

export default function OrderItem({ cartItems }) {
  return (
    <Fragment>
      {cartItems.map(({ title, price }, index) => {
        return (
          <Fragment key={index}>
            <View style={styles.container}>
              <View>
                <Text>{index + 1}</Text>
              </View>
              <View>
                <Text>{title}</Text>
              </View>
              <View>
                <Text> ₹ {price}</Text>
              </View>
            </View>
            <Divider />
          </Fragment>
        )
      })}
    </Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
})
