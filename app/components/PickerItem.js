import React from 'react'
import AppText from './AppText'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function PickerItem({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.title}</AppText>
    </TouchableOpacity>
  )


  
}

const styles = StyleSheet.create({
    text:{
        padding:10
    }
  })