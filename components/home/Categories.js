import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

export default function Categories({ categories }) {
  return (
    <View style={styles.content}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(({ title, image }, index) => {
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => console.log(title)}
              key={index}
            >
              <Image style={styles.image} source={image} />
              <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 5,
    backgroundColor: COLORS.foreground,
  },
  item: {
    margin: 15,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
