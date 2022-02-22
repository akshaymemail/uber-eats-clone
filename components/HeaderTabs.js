import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery')
  console.log('activeTab', activeTab)
  return (
    <View style={styles.content}>
      <View style={styles.row}>
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
    </View>
  )
}

const HeaderButton = ({ title, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: activeTab === title ? '#000000' : '#ffffff',
      }}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: activeTab === title ? '#f1f1f1' : '#000000',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
