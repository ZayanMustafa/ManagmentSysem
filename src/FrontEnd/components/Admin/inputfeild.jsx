import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({
  label,           
  name,            
  id,              
  value,           
  onChange,        
  required = true,
  fullWidth = true,
  autoComplete,    
  autoFocus = false,
  variant = "outlined",
  margin = "normal"
}) => {
  return (
    <TextField
      variant={variant}          
      margin={margin}            
      required={required}       
      fullWidth={fullWidth}     
      label={label}             
      name={name}               
      id={id}                   
      value={value}             
      onChange={onChange}       
      autoComplete={autoComplete} 
      autoFocus={autoFocus}     
    />
  );
};

export default InputField;
