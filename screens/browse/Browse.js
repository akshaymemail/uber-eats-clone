import { StyleSheet, Text, View, StatusBar as Status } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
import SearchBox from '../../components/common/SearchBox'

export default function Browse() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <SearchBox placeholder="Food, Drinks, etc" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  container: {
    flex: 1,
    marginTop: Status.currentHeight + 5,
    backgroundColor: COLORS.white,
    width: '100%',
  },
})
