import React from 'react'
import AppText from '../AppText'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'
export default function AppFormField({name, width, ...otherProps}) {
    const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
  return (
    <>
       <AppTextInput 
       
        onBlur={()=> setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
         />
          <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
