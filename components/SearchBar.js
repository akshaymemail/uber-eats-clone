import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import COLORS from '../constants/colors'

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <GooglePlacesAutocomplete
        placeholder="Start typing here..."
        styles={{
          textInput: styles.textInput,
          textInputContainer: styles.textInputContainer,
        }}
        renderLeftButton={() => {
          return (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location-sharp" size={20} color="#000" />
            </View>
          )
        }}
        renderRightButton={() => {
          return (
            <View style={styles.rightButton}>
              <AntDesign
                name="clockcircle"
                size={14}
                color="#000"
                style={{ marginRight: 10 }}
              />
              <Text>Search</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: COLORS.background,
    borderRadius: 20,
    fontWeight: '700',
    marginTop: 10,
  },
  textInputContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightButton: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: COLORS.foreground,
    padding: 10,
    borderRadius: 30,
  },
})
