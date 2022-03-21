import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Login() {
  return (
    <View style={styles.screen}>
      <LoginTitle />
      <Image
        style={styles.image}
        source={require('../../assets/images/login.jpg')}
      />
      <BottomSheet />
    </View>
  )
}

const LoginTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={{ ...styles.loginTitleText, color: '#000000' }}>
        Uber Eats
      </Text>
      <Text style={{ ...styles.loginTitleText, color: 'green' }}>Clone</Text>
    </View>
  )
}

const BottomSheet = () => {
  return (
    <KeyboardAvoidingView
      style={styles.bottomSheet}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.bottomSheetText}>
        Use your Uber account to get started!
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="akshaymemail@gmail.com"
            keyboardType="email-address"
          />
          <TouchableOpacity activeOpacity={0.5}>
            <Ionicons name="arrow-forward" size={30} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    position: 'absolute',
    zIndex: 1,
    top: '10%',
    left: '5%',
  },
  loginTitleText: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '18%',
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  bottomSheetText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#424242',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputRow: {
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 20,
  },
})
