import { Platform } from "react-native";
import colors from "./colors";

export default{
    colors,//can be used to repplace colors.js
    text:{
        fontSize:18,
        color:colors.medium,
        fontFamily: Platform.OS === "android"?"Roboto":"Avenir"
    }
}
