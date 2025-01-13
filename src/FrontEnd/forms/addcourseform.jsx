import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Avatar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Navbar from "../components/navbar"; // Custom Navbar Component
import { toast } from 'react-toastify';
import axios from 'axios';

const AddCourse = () => {
  const [formData, setFormData] = useState({
    coursename: "",
    coursetype: "",
    duration: "",
    picture: "",
    level: "",
    dec: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, picture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sending data to the backend API (MongoDB) using axios
      await axios.post('/api/courses', formData);
      notify("Course Added successfully! 😊✅");
      console.log("Course Form Submitted:", formData);
      setFormData({
        coursename: "",
        coursetype: "",
        duration: "",
        picture: "",
        level: "",
        dec: "",
      });
      setImagePreview(null);
    } catch (error) {
      notify("Failed to add course. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar title="Admin Panel" link="/admin" color="#1A73E8" />
      <Box
        sx={{
          padding: 3,
          maxWidth: 900,
          marginTop: 10,
          margin: "0 auto",
          borderRadius: "8px",
          border: "1px solid #e0e0e0",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#1976d2",
            padding: "16px",
            textAlign: "center",
            color: "#fff",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <Typography variant="h5">Add Course</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              textAlign="center"
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              <IconButton
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                component="label"
              >
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {imagePreview ? (
                  <Avatar src={imagePreview} sx={{ width: 120, height: 120 }} />
                ) : (
                  <Avatar sx={{ width: 120, height: 120 }}>Descriptive Picture</Avatar>
                )}
              </IconButton>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name of Course"
                name="coursename"
                value={formData.coursename}
                onChange={handleInputChange}
                required
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Course Type</InputLabel>
                <Select
                  name="coursetype"
                  value={formData.coursetype}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Vocational">Vocational</MenuItem>
                </Select>
              </FormControl>
            </Grid>
           
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Course Duration</InputLabel>
                <Select
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value="2 Months">2 Months</MenuItem>
                  <MenuItem value="3 Months">3 Months</MenuItem>
                  <MenuItem value="4 Months">4 Months</MenuItem>
                  <MenuItem value="1 Year">1 Year</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Course Level</InputLabel>
                <Select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Basic Description"
                name="dec"
                value={formData.dec}
                onChange={handleInputChange}
                required
              />
            </Grid>

          </Grid>

          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddCourse;
