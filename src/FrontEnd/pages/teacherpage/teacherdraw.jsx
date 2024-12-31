import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Book as BookIcon,
  AccountBalance as AccountBalanceIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { SideDraw } from '../../components/draw';

export default function TeacherSlidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const listItems = [
    { icon: <PeopleIcon />, text: 'Course Outline', subOptions: ['Complete Outline', 'Daily Assigment'] },
    { icon: <PeopleIcon />, text: 'Student Assignments', subOptions: ['Assignments Students', 'Add Student'] },
    { icon: <LogoutIcon />, text: 'Log out', subOptions: [] },
  ];

  const itemColors = [
    'red',
    'blue',
    'green',
    'purple',
    'orange',
    'black',
  ];

  const subOptionLinks = [
    ['/courseoutline/complete', '/Course Outline/assigment'],
    ['/assigment/sumbited', '/students/add'],
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap sx={{ flexGrow: 1, color: 'white' }}>
            Teacher
          </Typography>
          <IconButton color="inherit">
            <Badge
            sx={{ mr: 1}}
            badgeContent={12} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton  color="inherit">
            <Avatar alt="Teacher" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <SideDraw
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        listItems={listItems}
        itemColors={itemColors}
        subOptionLinks={subOptionLinks}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: { sm: `${drawerWidth}px` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}