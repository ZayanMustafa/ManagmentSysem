import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', 
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" component="div" gutterBottom>
          😕
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Something Went Wrong
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          An unexpected error has occurred. Please try again later.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
