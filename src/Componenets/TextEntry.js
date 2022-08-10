import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextField from '@mui/material/TextField';

const TextEntry = ({name, label, type}) => {
  return (
    <>
      <Field 
        style={{margin: '10px'}} 
        name={name}
        label={label}
        as={TextField}
        type={type}
      />
      <span style={{color: 'red'}}> {<ErrorMessage name={name} />} </span>
    </>
  )
}

export default TextEntry