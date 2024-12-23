import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
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
          🤔
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
        Oops! Lagta hai aap uss page tak pohnch gaye hain jo abhi tak kisi admin, teacher, ya student ne nahi dekha!
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
 export default NotFound;