import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import defaultstyles from '../config/styles';

export default function AppText({children, style, ...otherProps}) {
  return (
   <Text style={[defaultstyles.text, style]} {...otherProps}> {children}</Text>
  )
}


const styles = StyleSheet.create({
  text:{
    //fontSize:20,
    //fontWeight:"bold",
    //fontStyle:"italic",
    color:"dodgerblue",
    textTransform:"capitalize",
    //fontFamily: Platform.OS === "android"?"Roboto":"Avenir"
    ...Platform.select({
      ios:{
        fontFamily:"Avenir",
        fontSize:20
      },
      android:{
        fontFamily:"Roboto",
        fontSize:18
      }
    })
  }
})

