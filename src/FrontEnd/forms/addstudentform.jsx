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

const AddStudent = () => {
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
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 900, marginTop: 10, margin: "0 auto", borderRadius: "8px", border: "1px solid #e0e0e0", overflow: "hidden" }}>
      <Box sx={{ backgroundColor: "#1976d2", padding: "16px", textAlign: "center", color: "#fff", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
        <Typography variant="h5">Add Student</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Avatar Image Upload */}
          <Grid item xs={12} textAlign="center" sx={{ marginTop: 2, marginBottom: 2 }}>
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
                <Avatar sx={{ width: 120, height: 120 }}>TA</Avatar> 
              )}
              <CameraAltIcon sx={{ position: "absolute", bottom: 0, right: 0 }} />
            </IconButton>
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              onChange={handleInputChange}
              required
            />
          </Grid>


          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              onChange={handleInputChange}
              required
              type="tel"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              onChange={handleInputChange}
              required
              type="email"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Courses</InputLabel>
              <Select
                name="courses"
                value={formData.courses}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="Web Devlopment">Web Devlopment</MenuItem>
                <MenuItem value="App Devlopment">App Devlopment</MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
                <MenuItem value="3D Game Devlopment">3D Game Devlopment</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              name="dob"
              onChange={handleInputChange}
              type="date"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Education</InputLabel>
              <Select
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="Matric">Matric</MenuItem>
                <MenuItem value="Hifz">Hifz</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddStudent;
