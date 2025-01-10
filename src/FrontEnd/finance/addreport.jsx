import React, { useState } from 'react';
import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import SubmitBtn from '../components/submitbtn';
import FormInput from '../components/forminput';
import Dropdown from '../components/dropdown';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputFileUpload from '../components/uploadfile';
import Navbar from '../components/navbar';

const notify = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const FileUpload = () => {
  const [month, setMonth] = useState('');
  const [file, setFile] = useState(null);
  const [filledBy, setFilledBy] = useState('');

  const handleFileChange = (files) => {
    setFile(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('month', month);
    formData.append('file', file);
    formData.append('filledBy', filledBy);

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        console.log(response.data);
        notify("File submitted successfully! ✅");
      })
      .catch(error => {
        console.error('There was an error uploading the report!', error);
      });
  };

  return (
    <>
    <Navbar title={"Admin Pannel"} link="/admin" />
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Upload Finance Report
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Dropdown
                label="Report Month"
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                options={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              < InputFileUpload onFileChange={handleFileChange} />
            </Grid>
            <Grid item xs={12}>
              <FormInput
                label="Filled By"
                name="filledBy"
                value={filledBy}
                onChange={(e) => setFilledBy(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <SubmitBtn label="Submit" color="#1976d2" notifyMessage="Form submitted successfully! ✅" />
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <ToastContainer />
    </Container>
    </>
  );
};

export default FileUpload;
