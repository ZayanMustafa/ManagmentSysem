import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/navbar";
import FormInput from "../components/forminput";
import SubmitBtn from "../components/submitbtn";
import Dropdown from "../components/dropdown";
import CalendarField from "../components/calender";

const AddClass = () => {
  const [formData, setFormData] = useState({
    batchName: "",
    startDate: "",
    endDate: "",
    campus: "",
    timing: "",
  });

  const campuses = ["Gulshan Campus", "Malir Campus", "North Nazimabad Campus"];
  const timings = ["2:00 PM - 5:00 PM", "4:00 PM - 9:00 PM", "10:00 AM - 1:00 PM"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Batch added successfully! 😊✅");
    setFormData({
      batchName: "",
      startDate: "",
      endDate: "",
      campus: "",
      timing: "",
    });
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
          <Typography variant="h5">Add Batch</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} mt={2}>
            <Grid item xs={12} md={6}>
              < FormInput
                label="Batch Name/Number"
                name="batchName"
                value={formData.batchName}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              < Dropdown
                label="Timing"
                name="timing"
                value={formData.timing}
                options={timings}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              < CalendarField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              < CalendarField
                label="End Date (Optional)"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Dropdown
                label="Campus"
                name="campus"
                value={formData.campus}
                options={campuses}
                onChange={handleInputChange}
              />
            </Grid>
            
          </Grid>

          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            < SubmitBtn
              label="Submit"
              color="primary"
              notifyMessage="Class Added successfully! 😊✅"
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AddClass;
