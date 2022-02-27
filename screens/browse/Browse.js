import {
  StyleSheet,
  View,
  Text,
  StatusBar as Status,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import COLORS from '../../constants/colors'
import SearchBox from '../../components/common/SearchBox'
import FoodCard from '../../components/browse/FoodCard'
import foods from '../../fake-db/foods'

export default function Browse() {
  const [inputFood, setInputFood] = useState('')
  const [filtered, setFiltered] = useState(foods)
  useEffect(() => {
    if (inputFood) {
      setFiltered(
        foods.filter(({ title }) =>
          title.toLowerCase().includes(inputFood.toLowerCase())
        )
      )
    } else {
      setFiltered(foods)
    }
  }, [inputFood])
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <SearchBox
          placeholder="Food, Drinks, etc"
          value={inputFood}
          onChangeText={(text) => setInputFood(text)}
        />
        <ScrollView
          style={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Title text="Trending Food" />
          <FoodCard foods={filtered} />
        </ScrollView>
      </View>
    </View>
  )
}

const Title = ({ text }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{text}</Text>
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  titleContainer: {
    marginVertical: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#424242',
  },
})
