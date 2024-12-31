import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Badge, Box } from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import SearchBar from '../../components/searchbar';

export default function AdminNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Admin Panel
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <IconButton color="inherit">
            <Badge badgeContent={1} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="Admin Avatar" src="https://via.placeholder.com/150" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
