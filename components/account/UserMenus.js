import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function UserMenus({ menus }) {
  return (
    <ScrollView style={styles.container}>
      {menus.map(({ icon, title }, index) => {
        return <UserItem key={index} icon={icon} title={title} />
      })}
    </ScrollView>
  )
}

const UserItem = ({ icon, title }) => {
  return (
    <TouchableNativeFeedback>
      <View style={styles.item}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            style={styles.icon}
            name={icon}
            title={title}
            size={25}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 40,
  },
  textContainer: {},
  icon: {},
  text: {},
})
