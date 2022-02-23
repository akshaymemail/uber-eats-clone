import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')
  console.log('activeTab', activeTab)
  return (
    <View style={styles.content}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = ({ title, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: activeTab === title ? COLORS.black : COLORS.white,
      }}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: activeTab === title ? COLORS.white : COLORS.black,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
