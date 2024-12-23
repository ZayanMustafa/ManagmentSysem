import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputField from '../components/Admin/inputfeild';

export default function SignIn() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('ID:', id);
    console.log('Password:', password);
  };

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            overflow: 'hidden',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5', 
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center', 
            height: '100vh', 
            padding: 3,
          }}
        >
          <Typography component="h1" variant="h4" sx={{ mb: 2 }}>
            Welcome to our Management System
          </Typography>
          <Typography component="h2" variant="body1" sx={{ mb: 3 }}>
            Sign in to continue
          </Typography>
          <Paper elevation={3} sx={{ padding: 3, width: '100%' }}>
            <form onSubmit={handleSubmit}>
            <InputField
             label = "Id"         
             name = "id"            
             id = "userId"   
             required 
             onChange={(e) => setPassword(e.target.value)}          
             value={password}
             />

             <InputField
             label = "Password"         
             name = "password"            
             id = "userPassword"   
             required 
             onChange={(e) => setPassword(e.target.value)}          
             value={password}
             />

              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
