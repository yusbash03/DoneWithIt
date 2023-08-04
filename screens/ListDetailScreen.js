import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../app/components/AppText'
import ListItem from '../app/components/ListItem'
export default function ListDetailScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/jacket2.jpg')}/>
        <View style={styles.textDetail}>
        <AppText style={styles.title}>A cool jacket for less</AppText>
        <AppText style={styles.subtitle}>$100</AppText>
        </View>
        <View style={styles.userContainer}>
        <ListItem title="Yusuf Sule" subTitle="17 Listings" image={require('../assets/icon1.png')}/>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor:"#f8f4f4",
        //paddingTop: 80,
        //padding:10
      },
  img:{
    width:"100%",
    height:250
  },
  title:{
    //marginBottom:7,
    color:"black",
    fontSize:24
  },
  subtitle:{
    color:"dodgerblue",
    fontWeight:"bold",
    marginVertical:8
  },
  textDetail:{
    padding:20
  },
  userContainer:{
    marginVertical:40
  }
})
