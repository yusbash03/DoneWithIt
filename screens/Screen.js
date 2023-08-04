import React from 'react'
import { SafeAreaView, StyleSheet, View} from 'react-native'
import  Constants  from 'expo-constants'
import AppTextInput from '../app/components/AppTextInput'
export default function Screen({children, style}) {
  return (
   <SafeAreaView style={[styles.screen, style]}>
    <View style={[styles.view, style]}>{children}</View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
    flex:1,
    //backgroundColor:"yellow"
  },
  view:{flex:1}
})
