import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, Platform } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
export default function App() {

  // const handlePress = ()=>{
  //   console.log("Text Pressed");
  // }
  // const handleClick = ()=>{
  //   console.log("Button Clicked");
  // }
  // console.log("App executed");
  // console.log(useDeviceOrientation());
  // const {landscape} = useDeviceOrientation();
  // let y;
  //y.toString();
  return (
    <view 
    style={{
      backgroundColor:"dodgerblue", 
      flex: 1,
    }}></view>
    // <SafeAreaView style={styles.container}>
    //   <View style={{width:"100%", height: landscape ? "100%" : "40%", backgroundColor:"dodgerblue"}}></View> 
    //   {/* <Text numberOfLines={1} onPress={handlePress}>Welcome to raect native Yusuf! .</Text>
    //   <Button style={buttonStyle} title='Click Me' onPress={()=> Alert.alert("Greetings", "Hello Cool")} />
    //   <Button title='Extra buttons' onPress={()=> Alert.alert("Greetings", "Allow Yusuf?", 
    //   [{text: "Yes", onPress:()=> console.log("Yes")}, {text: "No", onPress:()=> console.log("No")}])} />
    //   <Button title='Prompt me' color="teal" onPress={()=> Alert.prompt("My Info","What is your name?", text =>console.log(text))} /> */}
    //   <Image blurRadius={5} source={{
    //     width: 200,
    //     height:300,
    //     uri: "https://picsum.photos/200/300"}}/>
       
    //   <Image source={require("./assets/favicon.png")}/>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}
const buttonStyle = {backgroundColor: "orange"}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
