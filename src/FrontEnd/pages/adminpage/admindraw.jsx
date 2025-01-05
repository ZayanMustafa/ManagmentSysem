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
import SideDraw from '../../components/draw';
import SearchBar from '../../components/searchbar';
import OverviewCard from '../../components/overviewcard';
import LogOut from '../../auth/logout';

export default function AdminSlidebar () {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const drawerWidth = 200;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const listItems = [
    { icon: <PeopleIcon />, text: 'Teachers', subOptions: ['All Teachers', 'Add Teacher'] },
    { icon: <PeopleIcon />, text: 'Students', subOptions: ['View Students', 'Add Student'] },
    { icon: <PeopleIcon />, text: 'Classes', subOptions: ['View Classes', 'Add Classes'] },
    { icon: <BookIcon />, text: 'Courses', subOptions: ['View Courses', 'Add Course'] },
    { icon: <PeopleIcon />, text: 'Attendance', subOptions: ['View Attendance', 'Add Attendance Record'] },
    { icon: <AccountBalanceIcon />, text: 'Finance', subOptions: ['View Finance', 'Add Finance Record'] },
    { icon: <LogoutIcon />, text: 'Log out', subOptions: [], link: '/logout' },
  ];

  const subOptionLinks = [
    ['/teachers/all', '/teachers/add'],
    ['/students/all', '/students/add'],
    ['/classes/view', '/classes/add'],
    ['/courses/view', '/courses/add'],
    ['/finance/view', '/finance/add'],
    ['/attendance/view', '/attendance/add'],
  ];

  const color = {
    primary: '#1A73E8',
    accent: '#C0C0C0',
    background: '#F5F5F5',
  };

  return (
    <Box sx={{ display: 'flex'  }}>
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
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="Admin Avatar" src="/static/images/avatar/1.jpg" />
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
        sx={{ flexGrow: 2, p: 3, ml: { sm: `${drawerWidth}px` }, backgroundColor: color.background }}
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
          <OverviewCard title="Total Courses" count="30" />
          <OverviewCard title="Total Batches" count="125" />
        </Box>
      </Box>
      <LogOut />
    </Box>
  );
}