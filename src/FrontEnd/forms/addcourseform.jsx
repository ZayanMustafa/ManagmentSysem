import React, { useState } from "react";
import { Box, Button, Grid, Typography, Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Navbar from "../components/navbar"; // Custom Navbar Component
import { toast } from 'react-toastify';
import axios from 'axios';
import Dropdown from '../components/Dropdown'; // Importing Dropdown component
import FormInput from '../components/FormInput'; // Importing FormInput component
import SubmitBtn from "../components/submitbtn";

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
              <FormInput
                label="Name of Course"
                name="coursename"
                value={formData.coursename}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Dropdown
                label="Course Type"
                name="coursetype"
                value={formData.coursetype}
                options={["IT", "Vocational"]}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Dropdown
                label="Course Duration"
                name="duration"
                value={formData.duration}
                options={["2 Months", "3 Months", "4 Months", "1 Year"]}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Dropdown
                label="Course Level"
                name="level"
                value={formData.level}
                options={["Beginner", "Intermediate", "Advanced"]}
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormInput
                label="Basic Description"
                name="dec"
                value={formData.dec}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <SubmitBtn label={"Sumbit"} size={"large"} color={"primary"}></SubmitBtn>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddCourse;
