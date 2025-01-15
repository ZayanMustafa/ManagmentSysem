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
import Navbar from "../components/navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import SubmitBtn, { notify } from '../components/submitbtn';


const AddQuiz = () => {
  const [formData, setFormData] = useState({
    question: "",
    options: ["", "", "", ""],
    correctOption: "",
  });

  const [questions, setQuestions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("option")) {
      const index = parseInt(name.split("option")[1], 10) - 1;
      const newOptions = [...formData.options];
      newOptions[index] = value;
      setFormData({ ...formData, options: newOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, formData]);
    setFormData({
      question: "",
      options: ["", "", "", ""],
      correctOption: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/quizzes', { questions });
      notify("Quiz Added successfully! 😊✅", "success");
      console.log("Quiz Form Submitted:", questions);
      setQuestions([]);
    } catch (error) {
      notify("Failed to add quiz. Please try again.", "error");
      console.error("Error submitting form:", error);
    }
  };

  const isFormValid = () => {
    return (
      formData.question.trim() !== "" &&
      formData.options.every((option) => option.trim() !== "") &&
      formData.correctOption.trim() !== ""
    );
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
          <Typography variant="h5">Add Quiz</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <TextField
                fullWidth
                label="Question"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                required
              />
            </Grid>
            {formData.options.map((option, index) => (
              <Grid item xs={12} md={6} key={index}>
                <TextField
                  fullWidth
                  label={`Option ${index + 1}`}
                  name={`option${index + 1}`}
                  value={option}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Correct Option</InputLabel>
                <Select
                  name="correctOption"
                  value={formData.correctOption}
                  onChange={handleInputChange}
                  required
                >
                  {formData.options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {`Option ${index + 1}`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
          <Button onClick={handleAddQuestion} variant="contained" color={ !isFormValid() ? "Gray" : "primary"} disabled={!isFormValid()}>
              Add Another Question
            </Button>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            < SubmitBtn label={" Sumbit Quiz"} color={ !isFormValid() ? "Gray" : "Primary"} btnsize="large" disabled={!isFormValid()} ></SubmitBtn>
          </Box>
        </form>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6">Questions Added:</Typography>
          {questions.map((q, index) => (
            <Typography key={index}>{`${index + 1}. ${q.question}`}</Typography>
          ))}
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export default AddQuiz;