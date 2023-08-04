import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert, Platform } from 'react-native';
export default function App() {

  return (
    <View 
    style={{
      backgroundColor:"#fff", 
      flex: 1,
      flexDirection:"row",
      justifyContent:"center",//main
      alignItems:"center", //for scondary axis of flexDirection which is row, so the sec is column
      //alignContent:"center", //without flexWrap it doesnt work. It wraps the entire content
      //flexWrap:"wrap"
    }}>
      <View 
    style={{
      backgroundColor:"dodgerblue", 
      width:100,
      height:100,
      
    }}/>
      <View 
    style={{
      backgroundColor:"gold", 
      width:100,
      height:100,
      bottom:20
    }}/>
      <View 
    style={{
      backgroundColor:"tomato", 
      width:100,
      height:100
    }}/>
    

    </View>
    
  );
}
// const buttonStyle = {backgroundColor: "orange"}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//      backgroundColor: '#fff',
//      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
// });
