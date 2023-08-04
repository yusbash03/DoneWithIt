import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Modal, Button, FlatList } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';
import defaultstyles from '../config/styles';
import AppText from './AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Screen from '../../screens/Screen';
import PickerItem from './PickerItem';



export default function AppPicker({icon, placeholder, items,numberOfColumns=1, PickerItemComponent=PickerItem, onSelectItem, width='100%', selectedItem}) {

    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    {/* onPress={setModalVisible(true)} */}
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true)} >
    <View style={[styles.container, {width}]} >
        { icon &&<MaterialCommunityIcons name={icon} size={20} color="grey" style={styles.icon} />}
        <AppText style={styles.text}>{selectedItem ? selectedItem.title : placeholder}</AppText>
        <MaterialCommunityIcons name="chevron-down" size={20} color="grey" />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType='slide'>
        <Screen>
            <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={keyy=>keyy.value.toString()}
            renderItem={({item})=> <PickerItemComponent item={item} title={item.title} onPress={()=> {
                setModalVisible(false)
                onSelectItem(item)
            }}/>}
             />
        <Button title='close' onPress={()=> setModalVisible(false)}/>
        </Screen>
        
    </Modal>
    </>
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
  text:{
    flex:1
  }

})
