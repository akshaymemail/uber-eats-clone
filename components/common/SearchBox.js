import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

export default function SearchBox({ placeholder, text, onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <FontAwesome5 style={styles.icon} name="search" size={20} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    backgroundColor: '#eeeeee',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  input: {
    flex: 1,
    color: '#424242',
    fontSize: 16,
    fontWeight: '700',
    height: 40,
  },
  icon: {
    marginRight: 10,
  },
})
