import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ImageUpload from "../components/uploadimage";
import FormInput from "../components/forminput";
import Dropdown from "../components/dropdown";
import CalendarField from "../components/calender";
import Navbar from "../components/navbar";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    expertise: "",
    skills: "",
    experience: "",
    address: "",
    dob: "",
    education: "",
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
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <Navbar link="/admin" title={"Admin Pannel "}/>
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
        <Typography variant="h5">Add Teacher</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <ImageUpload
              imagePreview={imagePreview}
              onImageChange={handleImageUpload}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput label="Name" name="name" onChange={handleInputChange} />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput
              label="Email"
              name="email"
              type="email"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput
              label="Field of Expertise"
              name="expertise"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormInput
              label="Soft Skills"
              name="skills"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Dropdown
              label="Experience"
              name="experience"
              value={formData.experience}
              options={["1-3 years", "4-6 years", "7+ years"]}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormInput
              label="Address"
              name="address"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CalendarField
              label="Date of Birth"
              name="dob"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Dropdown
              label="Education"
              name="education"
              value={formData.education}
              options={["Bachelor's", "Master's", "Ph.D."]}
              onChange={handleInputChange}
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

export default AddTeacher;
