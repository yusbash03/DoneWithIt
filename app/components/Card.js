import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText'
export default function Card({title, image, subTitle}) {
  return (
   <View style={styles.card}>
    <Image style={styles.img} source={image}/>
    <View style={styles.detailContainer}>
    <AppText style={styles.title}>{title}</AppText>
    <AppText style={styles.subtitle}>{subTitle}</AppText>
    </View>
   
   </View>
  )
}

const styles = StyleSheet.create({
  card:{
    backgroundColor:"#fff",
    borderRadius:20,
    marginBottom:15,
    overflow:"hidden"
  },
  img:{
    width:"100%",
    height:200
  },
  detailContainer:{
    padding:20
  },
  title:{
    marginBottom:7,
    color:"black"
  },
  subtitle:{
    color:"dodgerblue",
    fontWeight:"bold"
  }
})
