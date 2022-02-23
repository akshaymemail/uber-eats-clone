import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Details from './screens/Details'
import Home from './screens/Home'

export default function App() {
  return <Details />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
