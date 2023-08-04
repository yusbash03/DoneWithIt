import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
export default function ListItemDelete({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
         <View style={styles.cntainer}> 
        <MaterialCommunityIcons name='trash-can' size={30} color="white"/>
    </View>
    </TouchableWithoutFeedback>
   
  )
}

const styles = StyleSheet.create({
  cntainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5252", width:"20%"
  }
})
