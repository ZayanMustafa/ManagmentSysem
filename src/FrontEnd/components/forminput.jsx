import React from "react";
import { TextField } from "@mui/material";

const FormInput = ({ label, name, type = "text", onChange }) => (
  <TextField
    fullWidth
    label={label}
    name={name}
    type={type}
    onChange={onChange}
    required
  />
);

export default FormInput;
