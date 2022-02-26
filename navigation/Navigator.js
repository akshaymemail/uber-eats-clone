import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from '../components/navigation/HomeTab'
import AccountTab from '../components/navigation/AccountTab'
import BrowseTab from '../components/navigation/BrowseTab'
import GroceryTab from '../components/navigation/GroceryTab'
import CartTab from '../components/navigation/CartTab'
import { FontAwesome5 } from '@expo/vector-icons'
import COLORS from '../constants/colors'

export default function Navigator() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          initialParams={{
            icon: 'home',
          }}
        />
        <Tab.Screen
          name="Browse"
          component={BrowseTab}
          initialParams={{
            icon: 'search',
          }}
        />
        <Tab.Screen
          name="Grocery"
          component={GroceryTab}
          initialParams={{
            icon: 'shopping-bag',
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartTab}
          initialParams={{
            icon: 'shopping-cart',
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountTab}
          initialParams={{
            icon: 'user',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const params = route.params || {}
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true })
          }
        }
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            style={{ ...styles.tabItem }}
          >
            <FontAwesome5
              style={isFocused ? styles.active : styles.inActive}
              name={params.icon}
              size={30}
            />
            <Text style={isFocused ? styles.active : styles.inActive}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.foreground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  tabItem: {
    alignItems: 'center',
    margin: 5,
  },
  inActive: {
    color: 'gray',
  },
  active: {
    color: COLORS.black,
  },
})
