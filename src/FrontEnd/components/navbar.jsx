import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = ({ title, link, color }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: color }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={link} style={{ color: 'white', textDecoration: 'none' }}>
            {title}
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
