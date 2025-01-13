import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import { toast } from 'react-toastify';
import axios from 'axios';
import SubmitBtn from "../components/submitbtn";
import FormInput from "../components/forminput";
import Dropdown from "../components/dropdown";
import CalendarField from "../components/calender";
import ImageUpload from "../components/uploadimage";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    courses: "",
    address: "",
    dob: "",
    education: "",
  });

  const [imagePreview, setImagePreview] = useState(null);
  const education = ["Web Development", "App Development", "Machine Learning", "Data Science", "3D Game Development"]
  const courses = ["Web Development", "App Development", "Machine Learning", "Data Science", "3D Game Development"]
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
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
      await axios.post('/api/students', formData);
      notify("Student Added successfully! 😊✅");
      setFormData({
        name: "",
        phone: "",
        email: "",
        courses: "",
        address: "",
        dob: "",
        education: "",
      });
      setImagePreview(null);
    } catch (error) {
      notify("Failed to add student. Please try again.");
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
          <Typography variant="h5">Add Student</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid 
            item xs={12}
            textAlign="center" 
            sx={{ marginTop: 2, marginBottom: 2 }}>
              <ImageUpload
                imagePreview={imagePreview}
                onImageChange={handleImageUpload}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormInput 
               label="Name"
               name="name"
               value={formData.name}
               onChange={handleInputChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormInput 
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                type="tel" />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormInput 
                label="Email"
                name="email"
                value={formData.email} 
                onChange={handleInputChange}
                type="email" />
            </Grid>

            <Grid item xs={12} md={6}>
              <Dropdown
                label="Courses"
                name="courses"
                value={formData.courses}
                onChange={handleInputChange}
                options={courses} />
            </Grid>

            <Grid item xs={12}>
              <FormInput 
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <CalendarField 
                 label="Date of Birth" 
                 name="dob"
                 onChange={handleInputChange} />
            </Grid>

            <Grid item xs={12} md={6}>
              <Dropdown 
                label="Education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                options={education} />
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <SubmitBtn 
            label="Submit"
            color="primary"
            notifyMessage="Student added successfully!"
            onClose={() => { console.log("Form Sumbit Sucessfully")}} />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddStudent;
