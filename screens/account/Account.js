import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserInfo from '../../components/account/UserInfo'
import COLORS from '../../constants/colors'
import UserMenus from '../../components/account/UserMenus'
import accountMenus from '../../fake-db/accountMenus'

export default function Account({ navigation }) {
  return (
    <View style={styles.screen}>
      <UserInfo
        name={'Akshay Singh'}
        avatar={'https://avatars.githubusercontent.com/u/43178939?v=4'}
      />
      <UserMenus menus={accountMenus} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})
