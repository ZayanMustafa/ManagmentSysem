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
import OverviewCard from '../../components/overviewcard';
import LogOut from '../../auth/logout';

export default function StudentSlidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const drawerWidth = 200;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const listItems = [
    { icon: <PeopleIcon />, text: 'Teachers', subOptions: ['My Teachers'] },
    { icon: <PeopleIcon />, text: 'Events', subOptions: ['View Events', 'Add Event'] },
    { icon: <BookIcon />, text: 'Courses', subOptions: ['View Courses', 'Add Course'] },
    { icon: <PeopleIcon />, text: 'Performance', subOptions: ['View Performance'] },
    { icon: <LogoutIcon />, text: 'Log out', subOptions: [], link: '/logout' },
  ];

  const subOptionLinks = [
    ['/teachers/view'],
    ['/events/view', '/events/add'],
    ['/courses/view', '/courses/add'],
    ['/performance/view'],
  ];

  const color = {
    primary: '#00897B',
    accent: '#FF5722',
    background: '#FFFFFF',
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
            Student Panel
          </Typography>
          <IconButton color="inherit">
          < Tooltip title="Notifications"> 
            <Badge sx={{ mr: 1}}  badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
            </Tooltip>
          </IconButton>
            <IconButton  color="inherit">
          <Tooltip title="Student Avatar">
            <Avatar alt="Student Avatar" src="/static/images/avatar/1.jpg" />
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
    <Box>
      <OverviewCard title="My Teachers" />
      <OverviewCard title="My Courses" />
    </Box>
    <Box>
      <OverviewCard title="My Events" />
      <OverviewCard title="My Performance" />
  </Box>
</Box>
    </Box>
    <LogOut />
    </Box>
  );
}