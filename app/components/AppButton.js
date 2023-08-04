import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function AppButton({title, onPress, color="tomato"} ) {
    const Login = ()=>{
        console.log("Logged in");
    }
  return (
    <TouchableOpacity style={[styles.btn, {backgroundColor: color}] } onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  
  )
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor: "tomato",
    width:"100%", 
    padding:15,
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:7

  },
  text:{
    fontSize:20,
    fontWeight:"bold",
    color:"white",
    textTransform:"uppercase"
  }
})
