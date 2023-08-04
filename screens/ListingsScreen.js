import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Screen from './Screen';
import Card from '../app/components/Card';

const listings = [
    {
        id:1,
        title:"All weather",
        price:56,
        image:require('../assets/jacket1.jpg')
    },
    {
        id:2,
        title:"Navy Seal",
        price:54,
        image:require('../assets/jacket2.jpg')
    },
    {
        id:3,
        title:"Red Jacket",
        price:233,
        image:require('../assets/jacket1.jpg')
    },
    {
        id:4,
        title:"Army Jacket",
        price:13,
        image:require('../assets/jacket2.jpg')
    }
]
export default function ListingsScreen() {
  return (
    <Screen style={styles.container}>
        <FlatList
        data={listings}
        keyExtractor={list=>list.id.toString()}
        renderItem={({item}) => 
    <       Card title={item.title} subTitle={"$" + item.price} image={item.image}/>
        }   
         />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#f8f4f4",
    padding:14
  }
})
