import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Protected from './Protected'
import Public from './Public'

export default function Navigator() {
  const IS_AUTHENTICATED = false
  return (
    <NavigationContainer>
      {IS_AUTHENTICATED ? <Protected /> : <Public />}
    </NavigationContainer>
  )
}
