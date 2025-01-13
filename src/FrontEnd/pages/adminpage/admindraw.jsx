import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Box, CssBaseline, useTheme, useMediaQuery, Tooltip, Avatar } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, Logout as LogoutIcon } from '@mui/icons-material';
import SideDraw from '../../components/draw';
import SearchBar from '../../components/searchbar';
import LogOut from '../../auth/logout';
import OverviewCard from '../../components/overviewcard';
// Import missing icons
import PeopleIcon from '@mui/icons-material/People';
import ClassIcon from '@mui/icons-material/Class';
import BookIcon from '@mui/icons-material/Book';
import EventIcon from '@mui/icons-material/Event';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LayersIcon from '@mui/icons-material/Layers';

export default function AdminSlidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const [alertOpen, setAlertOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const listItems = [
    { icon: <  PeopleIcon />, text: 'Teachers', subOptions: ['All Teachers', 'Add Teacher'] },
    { icon: < PeopleIcon />, text: 'Students', subOptions: ['View Students', 'Add Student'] },
    { icon: < ClassIcon />, text: 'Classes', subOptions: ['View Classes', 'Add Classes'] },
    { icon: <BookIcon />, text: 'Courses', subOptions: ['View Courses', 'Add Course'] },
    { icon: <EventIcon />, text: 'Attendance', subOptions: ['View Attendance', 'Add Attendance Record'] },
    { icon: <AccountBalanceIcon />, text: 'Finance', subOptions: ['View Finance', 'Add Finance Record'] },
    { icon: <LayersIcon />, text: 'Batches', subOptions: ['View Batches', 'Add New Batch', 'Merge Batch'] },
    { icon: <LayersIcon />, text: 'Quiz', subOptions: ['View Quiz', 'Add New Quiz'] },
    { 
      icon: <LogoutIcon />, 
      text: 'Alert', 
      subOptions: ['Send Alert'], 
      onClick: handleAlertOpen, // Attach the handler here 
    },
    { icon: <LogoutIcon />, text: 'Log out', subOptions: [], link: '/logout' },
  ];

  const subOptionLinks = [
    ['/teachers/all', '/teachers/add'],
    ['/students/all', '/students/add'],
    ['/classes/view', '/classes/add'],
    ['/courses/view', '/courses/add'],
    ['/batch/view', '/batch/add', '/batch/merge'],
    ['/finance/view', '/finance/add'],
    ['/attendance/view', '/attendance/add'],
    ['/quiz/view', '/quiz/add'],
    ['/alert/send'],
  ];

  const color = {
    primary: '#1A73E8',
    accent: '#C0C0C0',
    background: '#F5F5F5',
    listItem: '#000000',
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
            Admin Panel
          </Typography>
          <SearchBar />
          <IconButton color="inherit">
            <Badge sx={{ mr: 1 }} badgeContent={12} color="secondary">
              <Tooltip title="Notifications" >
                <NotificationsIcon />
              </Tooltip>
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Tooltip title="Admin Avatar">
              <Avatar alt="Admin Avatar" src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideDraw
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={200}
        listItems={listItems}
        subOptionLinks={subOptionLinks}
        color={color}
        notificationIcon={<NotificationsIcon />}
        avatar={<Avatar alt="Admin Avatar" src="/static/images/avatar/1.jpg" />}
        title="Admin Profile"
        tooltip="Admin Notification"
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: { sm: `${200}px` } }}
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
          <OverviewCard title="Total Teachers" count="8,450" />
          <OverviewCard title="Total Students" count="120,548" />
          <OverviewCard title="Total Classes" count="78" />
          <OverviewCard title="Total Courses" count="350" />
          <OverviewCard title="Quiz" count="30" />
          <OverviewCard title="Total Cities" count="125" />
        </Box>
      </Box>
  
      <LogOut />
    </Box>
  );
}
