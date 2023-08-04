import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, ImageBackground } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';

export default function App(){

    return(
        <View style={styles.container} >
            <Text>Hello</Text>
            {/* <Image source={require("./assets/favicon.png")}/> */}
        </View>
        //<WelcomeScreen/>
        //<ViewImageScreen/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});