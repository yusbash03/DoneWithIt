import { useFormikContext } from 'formik'
import React from 'react'
import AppPicker from './AppPicker';
import { ErrorMessage } from './forms';

export default function AppFormPicker({items,PickerItemComponent, name, numberOfColumns, width, placeholder}) {
    const {errors, setFieldValue, values, touched} = useFormikContext();
  return (
    <>
      <AppPicker PickerItemComponent={PickerItemComponent} items={items} width={width} onSelectItem={(item)=> setFieldValue(name,item)} 
      placeholder={placeholder} selectedItem={values[name]} numberOfColumns={numberOfColumns} />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}
