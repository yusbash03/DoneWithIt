import React from 'react'
import * as Yup from 'yup'
import { AppForm, AppFormField, SubmitButton } from '../app/components/forms';
import AppFormPicker from '../app/components/AppFormPicker';
import { View, StyleSheet } from 'react-native'
import Screen from './Screen';
import CategoryPickerItem from '../app/components/CategoryPickerItem';


const validationSchema = Yup.object().shape({
    title:Yup.string().min(2).required().label("Title"),
    price:Yup.number().min(1).max(10000).required().label("Price"),
    description:Yup.string().min(2).label("Description"),
    category:Yup.object().required().nullable().label("Category")
});

const categories =[
    {
        value:1,
        title:"Furnitures",
        icon:"floor-lamp",
        backgroundColor:"tomato"
    },
    {
        value:2,
        title:"Clothing",
        icon:"forest",
        backgroundColor:"teal"
    },
   
    {
        value:3,
        title:"Cameras",
        icon:"camera",
        backgroundColor:"green"
    },
    {
        value:4,
        title:"Books",
        icon:"book-open-blank-variant",
        backgroundColor:"tomato"
    },
    {
        value:5,
        title:"Cars",
        icon:"car",
        backgroundColor:"teal"
    },
    {
        value:6,
        title:"Games",
        icon:"camera",
        backgroundColor:"red"
    },
    {
        value:7,
        title:"Sports",
        icon:"gift",
        backgroundColor:"blue"
    },
    {
        value:8,
        title:"Movies & Music",
        icon:"camera",
        backgroundColor:"red"
    },
    {
        value:9,
        title:"Others",
        icon:"camera",
        backgroundColor:"teal"
    },
]
export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
    
      <AppForm 
       initialValues={{title:'', price:'', description:'', category:null}}
       onSubmit={values=> console.log(values)}
       validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField keyboardType="numeric" width="40%" maxLength={8} name="price" placeholder="Price" />
        <AppFormPicker 
        numberOfColumns={3} 
        PickerItemComponent={CategoryPickerItem} 
        items={categories} width="50%"  name="category" placeholder="Category"/>
        <AppFormField maxLength={255} name="description" placeholder="Description" numberOfLines={3} multiline />
        <SubmitButton title="Submit"/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:15
  }
})
