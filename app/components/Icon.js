import React from 'react'
import { View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Icon({size = 40, name, backgroundColor="#000", iconColor="white"}) {
  return (
    <>
    {/* background color's value not added bcoz the value and prop name are the same */}
    <View style={{width:size, height:size, backgroundColor, borderRadius:size/2, justifyContent:"center", alignItems:"center"}}> 
        <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
    </>
  )
}

// const styles = StyleSheet.create({
//   style
// })
