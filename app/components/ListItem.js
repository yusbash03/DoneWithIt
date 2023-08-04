import React from 'react'
import { View, StyleSheet, Image, TouchableHighlight, ImageComponent, Text } from 'react-native'
import AppText from './AppText'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({title, subTitle, image, IconComponent, style, onPress, renderRightActions}) {
  return (
    <>
     <Swipeable renderRightActions={renderRightActions}>
         <TouchableHighlight underlayColor="#f8f4f4" onPress={onPress}>
        <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.img} source={image}/>}
            <View style={styles.details}>
            <AppText style={{fontWeight:"bold"}} numberOfLines={1}>{title}</AppText>
            { subTitle && <AppText style={{color:"#6e6969"}} numberOfLines={2}>{subTitle}</AppText>}
            </View>
            <MaterialCommunityIcons name='chevron-right' size={25} />
        </View>
    </TouchableHighlight>
    </Swipeable>
    </>
   
   
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:"center",
        flexDirection:"row",
        padding:15,
        backgroundColor:"white"
    },
  img:{
    width:80,
    height:80,
    borderRadius:40, //apply half of the widhth/height to get a perfect circle of item
    marginRight: 11,
    //marginVertical:10
  },
  details:{
    marginLeft:12,
    justifyContent:"center",
    flex:1
  }
})

