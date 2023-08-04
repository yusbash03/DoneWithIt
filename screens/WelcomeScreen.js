import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native'
import AppButton from '../app/components/AppButton'

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background}
    source={require("../assets/bg3.jpeg")}
    blurRadius={7}
    >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/icon2.png")} />
        <Text style={styles.sellText}>Sell What you don't need</Text>
        </View>
        

    {/* <View style={styles.loginBtn}>
        <Text style={{color:"#fff", fontSize:20, flexDirection:"column"}} onPress={()=> console.log("Login")}>Login</Text>
    </View> */}
    <View style={styles.btnContainer}>
        <AppButton title="Login"/>
        <AppButton title="Register" color='teal'/>
    </View>
    
    {/* <View style={styles.registerBtn}>
        <Text style={{color:"#fff", fontSize:20, flexDirection:"column"}} onPress={()=> console.log("Register")}>Register</Text>
    </View> */}

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        //flexDirection:"column",
        justifyContent:"flex-end", //align along primary axis
        alignItems:"center", //for secondary axis
    }, 
    // loginBtn:{
    //     //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //     backgroundColor:"tomato",
    //     alignItems:"center",
    //     width:"100%",
    //     height:70,
    //     justifyContent:"center"
    // },
    registerBtn:{
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:"teal",
        alignItems:"center",
        width:"100%",
        height:70,
        justifyContent:"center"
    },
    logo:{
        width:110,
        height:100,
       
    },
    logoContainer:{
        position:"absolute",
        top:90,
        alignItems:"center"
    },
    sellText:{
        color:"black",
        fontSize:25,
        fontWeight:"bold",
        paddingVertical:15
        //position:"absolute",
        //fontWeight:"bold"
    },
    btnContainer:{
        padding:10,
        width:"100%",
    }
})