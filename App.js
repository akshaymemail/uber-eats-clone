import { StyleSheet, Text, View } from 'react-native'
import Navigator from './navigation/Navigator'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>
  )
}
