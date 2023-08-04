import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.closeBtn}>
            <MaterialCommunityIcons name='close' size={30} color="white"/>
        </View>
        <View style={styles.deleteBtn}>
        <MaterialCommunityIcons name='trash-can-outline' size={30} color="white"/>
        </View>
        <Image style={styles.image} resizeMode='contain' source={require("../assets/bg2.jpeg")}/>
    </View>
   
  )
}
 const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    closeBtn:{
        // width:60,
        // height:60,
        // backgroundColor:"tomato",
        position:"absolute",
        top:40,
        left:20
    },
    container:{
        backgroundColor:"#000",
        flex:1,
        paddingTop:40
    },
    deleteBtn:{
        // width:60,
        // height:60,
        // backgroundColor:"green",
        position:"absolute",
        top:40,
        right:30
    },
 })