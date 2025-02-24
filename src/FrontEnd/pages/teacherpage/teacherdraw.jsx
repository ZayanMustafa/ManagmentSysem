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
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Book as BookIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import SideDraw from '../../components/draw';
import SearchBar from '../../components/searchbar';
import OverviewCard from '../../components/overviewcard';
import LogOut from '../../auth/logout';

export default function TeacherSlidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const drawerWidth = 200;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const listItems = [
    { icon: <PeopleIcon />, text: 'Students', subOptions: ['All Students'] },
    { icon: <PeopleIcon />, text: 'Batches', subOptions: ['All Batches '] },
    { icon: <BookIcon />, text: 'Courses Outline', subOptions: ['View Courses', 'Add Course'] },
    { icon: <PeopleIcon />, text: 'Assignments', subOptions: ['Add Assignments', 'View Assignments'] },
    { icon: <PeopleIcon />, text: 'Request', subOptions: [] },
    { icon: <LogoutIcon />, text: 'Log out', subOptions: [], link: '/logout' },
  ];

  const subOptionLinks = [
    ['/students/view'],
    ['/batches/view'],
    ['/courses/view', '/courses/add'],
    ['/assignments/view', '/assignments/add'],
  ];

  const color = {
    primary: '#34A853',
    accent: '#FFC107',
    background: '#FAFAFA',
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1, backgroundColor: color.primary }}>
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
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: 'white' }}>
            Teacher Panel
          </Typography>
          <SearchBar />
          <IconButton color="inherit">
            <Badge sx={{ mr: 1 }} badgeContent={10} color="secondary">
            < Tooltip title="Notifications" > 
              < NotificationsIcon />
            </Tooltip>
           </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Tooltip title="Teacher Avatar"> 
              <Avatar alt="Teacher Avatar" src="/static/images/avatar/1.jpg" /> 
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideDraw
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        listItems={listItems}
        subOptionLinks={subOptionLinks}
        color={color}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: { sm: `${drawerWidth}px` }, backgroundColor: color.background }}
      >
        <Toolbar />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
            p: 5,
          }}
        >
          <OverviewCard title="Total Students" count="1,205" />
          <OverviewCard title="Total Batches" count="125" />
          <OverviewCard title="Total Courses" count="350" />
        </Box>
      </Box>
      <LogOut />
    </Box>
  );
}
