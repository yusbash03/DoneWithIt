import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ListItemSeparator() {
  return (
   <View style={styles.separate}>

   </View>
  )
}

const styles = StyleSheet.create({
  separate:{
    width:"100%",
    height:2,
    backgroundColor:"#f8f4f4"
  }
})
