import React from "react";
import { Grid, TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const ImageContainer = styled(Box)({
  position: "relative",
  height: "100%",
  width: "100%",
  backgroundImage: "url('https://via.placeholder.com/500')", 
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const OverlayText = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
});

const SignIn = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Left Side - Image with Text */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <ImageContainer>
          <OverlayText variant="h4">Welcome to Management System</OverlayText>
        </ImageContainer>
      </Grid>

      {/* Right Side - Sign-In Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: 360,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Sign In
          </Typography>
          <TextField
            label="ID"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 3 }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
