import React from "react";
import { TextField } from "@mui/material";

const CalendarField = ({ label, name, onChange }) => (
  <TextField
    fullWidth
    label={label}
    name={name}
    type="date"
    InputLabelProps={{ shrink: true }}
    onChange={onChange}
    required
  />
);

export default CalendarField;
