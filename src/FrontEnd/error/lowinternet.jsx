import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LowInternet() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center content vertically
          height: '100vh', // Make the Box take full viewport height
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          📶😴
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Taking Too Long
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Please check your connection or try again later.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
