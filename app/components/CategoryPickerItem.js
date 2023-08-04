import React from 'react'
import { View } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import Icon from './Icon';
import AppText from './AppText';
export default function CategoryPickerItem({ onPress, item}) {
  return (
    <>
     <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={70} />
        <AppText style={styles.label}>{item.title}</AppText>
     </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal:27,
    paddingVertical:15, 
    alignItems:"center",
    width:"34%"
  },
  label:{
    marginTop:5,
    textAlign:"center"
  }
});
