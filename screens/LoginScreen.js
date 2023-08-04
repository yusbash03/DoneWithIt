import React, {useState} from 'react'
import Screen from './Screen'
import { Image, StyleSheet, TextInput, Button } from 'react-native'
import AppTextInput from '../app/components/AppTextInput'
import { Formik } from 'formik'
import AppButton from '../app/components/AppButton'
import * as Yup from 'yup'
import {AppForm, AppFormField, SubmitButton} from '../app/components/forms'
//import AppFormField from '../app/components/forms/AppFormField'
//import SubmitButton from '../app/components/forms/SubmitButton'
//import AppForm from '../app/components/forms/AppForm'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(3).label("Password")
})
export default function LoginScreen() {

    //const [email, setEmail] = useState("")
    //const [password, setPassword] = useState("")
  return (
    <Screen style={styles.body  }>
        <Image style={styles.logo} source={require('../assets/logos1.png')} />
       

        <AppForm
        initialValues={{email:'', password:''}}
        onSubmit={values=> console.log(values)}
        validationSchema={validationSchema}
        >
           <AppFormField 
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="email"
        name="email"
        //onBlur={()=> setFieldTouched("email")}
        //clearButtonMode='always'
        //onChangeText={handleChange("email")}
        textContentType="emailAddress"
         />
         {/* <AppText style={{color:"red"}}>{errors.email}</AppText> */}
        <AppFormField 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        name="password"
        //onChangeText={pass=>setPassword(pass)}
        secureTextEntry
        placeholder="password"
        textContentType="password"
         /> 
         {/* u can also use conditional renderinng using touched */}
         {/* <ErrorMessage error={errors.password} visible={touched.password} />  */}
         {/* <AppButton title="Login" onPress={handleSubmit}/> */}
         <SubmitButton title="Login"  />
          
        </AppForm>
       
    </Screen>
  )
}

const styles = StyleSheet.create({
  logo:{
    width:80,
    height:80,
    alignSelf:"center",
    marginBottom:70,
    marginTop:50
  },
  body:{
    padding:15
  }
})
