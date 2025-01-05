import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({ label, name, value, options, onChange }) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select name={name} value={value} onChange={onChange} required>
      {options.map((option, index) => (
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Dropdown;
