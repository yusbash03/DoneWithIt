import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import ListItem from '../app/components/ListItem'
import Constants  from 'expo-constants'
import ListItemSeparator from '../app/components/ListItemSeparator'
import ViewImageScreen from './ViewImageScreen'
import ListItemDelete from '../app/components/ListItemDelete'
import Screen from './Screen'
const initialMessages = [
    {
        id:1,
        title:"Buying Buying Buying Buying Buying Buying Buying Buying Buying Buying Buying",
        description:"I want to buy",
        image:require('../assets/jacket1.jpg')
    },
    {
        id:2,
        title:"Interested",
        description:"I am interested, some subtexts available here for long text testing",
        image:require('../assets/jacket2.jpg')
    },
    {
        id:3,
        title:"Buying",
        description:"I want to buy 2 of them",
        image:require('../assets/jacket1.jpg')
    }
]
export default function MessagesScreen() {
    const [messages, setMessages] = useState(initialMessages)
    const [refresh, setRefresh] = useState(false)
    const handleDelete = (item)=>{
        const newMsg = messages.filter(x=>x.id !== item.id);
        setMessages(newMsg);
        //console.log("Print", item);
    }
    const Pressed = ()=>{
        console.log("Pressed");
    }
  return (
    <Screen>
        <FlatList 
    data={messages}
    keyExtractor={messages=>messages.id.toString()}
    renderItem={({item})=> 
       (<ListItem onPress={Pressed} title={item.title} 
       renderRightActions={()=> <ListItemDelete onPress={()=>handleDelete(item)}/>}
       subTitle={item.description} image={item.image}/> )}
       ItemSeparatorComponent={ListItemSeparator}
       refreshing={refresh}
       onRefresh={()=>{
        setMessages([
            {
                id:2,
                title:"Interested",
                description:"I am interested",
                image:require('../assets/jacket2.jpg')
            },
        ])
       }}
    />
    
    </Screen>
    
  )
}

const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
    flex:1
  },
  itemList:{
    marginVertical:10
  }
})
