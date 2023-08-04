import React from 'react'
import { View, StyleSheet, Image, Text, FlatList } from 'react-native'
import ListItem from '../app/components/ListItem'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from '../app/components/AppText';
import Screen from './Screen';
import colors from '../app/config/colors';
import Card from '../app/components/Card';
import Icon from '../app/components/Icon';
import ListItemSeparator from '../app/components/ListItemSeparator';
export default function AccountScreen() {
  const menuItems = [
    {
      id:1,
      title:"My Listings",
      icon:{name:"format-list-bulleted", backgroundColor:"tomato"}
    },
    {
      id:2,
      title:"My Messags",
      icon:{name:"email", backgroundColor:"teal"}
    },
  ]
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
      <ListItem title="Yusuf Sule" subTitle="ybyusbash@gmail.com" image={require('../assets/cool2.jpg')}/>
      </View>
      <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={list=>list.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({item}) => 
        <ListItem title={item.title} 
        IconComponent={ <Icon name={item.icon.name}  backgroundColor={item.icon.backgroundColor}/>}/>
        }   
         />
      </View>
      <ListItem title="Logout" 
        IconComponent={ <Icon name="logout" iconColor='white' backgroundColor="red"/>}/>
    </Screen>
    // <View style={styles.container}>
    //     <View style={styles.userDetail}>
    //     <ListItem title="Yusuf Sule" subTitle="ybyusbash@gmail.com" image={require('../assets/cool1.png')}/>
    //     </View>
    //     <View style={styles.userDetail}>
    //     <View style={styles.detail2}>
    //         <View style={styles.img}>
    //         <MaterialCommunityIcons name='trash-can' size={25} color="white"/>
    //         </View>
    //         <View>
    //         <AppText style={{fontWeight:"bold", color:"grey"}}>My Listings</AppText>
    //         </View>
    //     </View>
    //     <View style={styles.detail2}>
    //         <View style={[styles.img, styles.mail]}>
    //         <MaterialCommunityIcons name='email' size={25} color="white"/>
    //         </View>
    //         <View>
    //         <AppText style={{fontWeight:"bold", color:"grey"}}>My Account</AppText>
    //         </View>
    //     </View>
    //     </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginVertical:20,
    // backgroundColor:"#f8f4f4",
    // paddingTop:70,
    // flex:1
  },
  screen:{backgroundColor:colors.light},
  userDetail:{
    padding:15,
    backgroundColor:'#fff',
    marginBottom:25,
    
  },
  detail2:{
    paddingLeft:40,
    padding:10,
    flexDirection:"row"
  },
 listItem:{
    textTransform:"lowercase"
 },
 mail:{
    backgroundColor:"teal"
 },
 img:{
    width:40,
    height:40,
    borderRadius:20, //apply half of the widhth/height to get a perfect circle of item
    marginRight: 11,
    backgroundColor:"tomato",
    justifyContent:"center",
    alignItems:"center"
    //marginVertical:10
  }

})
