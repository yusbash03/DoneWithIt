import React from 'react'
import AppText from '../AppText'
import { StyleSheet } from 'react-native'

export default function ErrorMessage({error, visible}) {
    if(!visible || !error) return null;
  return (
    <AppText style={styles.text}>{error}</AppText>
  )
}

const styles = StyleSheet.create({
  text:{
    color:"red"
  }
})
