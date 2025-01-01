import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddForm = ({ role }) => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    age: '',
    email: '',
    gender: '',
    phoneNo: '',
    nationality: '',
    address: '',
    lastQualification: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, age: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Add {role === 'teacher' ? 'Teacher' : 'Student'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Father's Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              selected={formData.age}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select Date of Birth"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Add other fields here... */}

          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddForm ;
