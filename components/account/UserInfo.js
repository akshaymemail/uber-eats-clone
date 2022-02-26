import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

export default function UserInfo({ name, avatar }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: 10,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  text: {
    fontWeight: '600',
  },
})
