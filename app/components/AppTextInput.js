import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import defaultstyles from '../config/styles';

export default function AppTextInput({icon, width="100%", ...otherProps}) { //width has the default value of 100% set if width value not provided
  return (
    <View style={[styles.container, {width}]}>
        { icon &&<MaterialCommunityIcons name={icon} size={20} color="grey" style={styles.icon} />}
        <TextInput style={defaultstyles.text} {...otherProps}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    borderRadius:25,
    backgroundColor:"#f8f4f4",
    //width:"100%",
    padding:15,
    marginVertical:15
  },
  icon:{
    marginRight:10
  },
  textInput:{
    fontSize:18,
    color:colors.medium
  }

})
