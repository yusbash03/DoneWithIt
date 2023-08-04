import React, { Component, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground, TextInput, Switch } from 'react-native';
import AppText from './app/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppButton from './app/components/AppButton';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import Card from './app/components/Card';
import ListDetailScreen from './screens/ListDetailScreen';
import ListItem from './app/components/ListItem';
import MessagesScreen from './screens/MessagesScreen';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';
import Screen from './screens/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './screens/LoginScreen';
import AILoginScreen from './screens/AILoginScreen';
import Icon from './app/components/Icon';
import ListingEditScreen from './screens/ListingEditScreen';

const Category =[
    {
        value:1,
        title:"Furniture"
    },
    {
        value:2,
        title:"Clothing"
    },
   
    {
        value:3,
        title:"Camera"
    }
]

export default function App(){
const [firstName, setFirstName] = useState("")
const [isNew, setIsNew] = useState(false)
const [catgory, setCategory] = useState(Category[0])

    const Login = ()=>{
        console.log("Logged in");
    }

    return(
      //<LoginScreen/>
      
      <ListingEditScreen/>
      // <Screen>
      
      //    <AppPicker 
      //   selectedItem={catgory}
      //   onSelectItem={item=>setCategory(item)}
      //   items={Category}
      //   placeholder="Category" icon="apps" />
      //    <AppTextInput placeholder="Email" icon="email"/> 
      // </Screen>   
       
      //   {/* <Switch value={isNew} onValueChange={isNew=> setIsNew(isNew)} /> */}
      //   {/* <AppTextInput placeholder="firstname" icon="email"/> */}
      //   {/* { isNew && <Text>on</Text>}
      //   { !isNew && <Text>off</Text>} */}
        // {/* <TextInput 
        // style={{borderBottomColor:"#D5DBDB", borderBottomWidth:2}} 
        // placeholder='username'
        // keyboardType='numeric'
        // maxLength={5}
        // clearButtonMode='always' //works only on ios
        // onChangeText={(name) => setFirstName(name)}
        // /> */}
      //   {/* <View style={{padding:10}}>
      //   <TextInput style={{borderColor:"grey", padding:20, borderRadius:20, borderWidth:2}} placeholder='username'/>
      //   </View> */}
      // </Screen>
      //<ListingsScreen/>
       //<AccountScreen/>
       //<Icon name="email" backgroundColor='tomato' iconColor='white' size={50}/>
      // <MessagesScreen/>
    //  <ViewImageScreen/>
      //  <ListDetailScreen/>
      // <View style={styles.cardContainer}>
      //   <Card title="A cool jacket" subTitle="$200" image={require('./assets/jacket2.jpg')}/>
       
      // </View>
        // <WelcomeScreen />
        // <View style={styles.container}>
            
        //     {/* <AppButton title="Login" onPress={Login} /> */}
        //     {/* <MaterialCommunityIcons name="email" size={200} color="red"/> */}
        //     {/* <AppText>I love me some react native</AppText> */}
        //     {/* <View style={{backgroundColor:"dodgerblue",
        // width:100,
        // height:100,
        // shadowColor:"grey",
        // shadowOffset: {height:10, width:1}, //determine shadow angles
        // shadowOpacity:0.5, //dtermines how dark or light shadow is. from 0-1
        // shadowRadius:5,
        // elevation:20,//for android
        // }} >
        // </View> */}



        //      {/* <View style={{backgroundColor:"dodgerblue",
        // width:100,
        // height:100,
        // borderWidth:10,
        // borderColor:"royalblue",
        // borderTopWidth:20,
        // borderTopLeftRadius:20,
        // borderBottomRightRadius:20}} >
        // </View>
        
        // <View style={{backgroundColor:"dodgerblue",
        // width:100,
        // height:100,
        // borderWidth:10,
        // borderColor:"royalblue",
        // borderRadius:50}} >
        // </View> */}
        

        // </View>
       
    )
}

const styles = StyleSheet.create({
  //for card
  cardContainer:{
    backgroundColor:"#f8f4f4",
    paddingTop: 90,
    padding:10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //flexDirection:"row"
  },
  text:{
    fontSize:30,
    fontWeight:"bold",
    fontStyle:"italic",
    color:"red",
    textTransform:"capitalize",
    //lineHeight:30
  }
});