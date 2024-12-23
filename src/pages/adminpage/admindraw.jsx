import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Book as BookIcon,
  AccountBalance as AccountBalanceIcon,
} from '@mui/icons-material';

export default function NavbarWithDrawer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
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
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Admin 2nd
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={12} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <PeopleIcon/>
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem button>
            <BookIcon/>  
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button>
            {/* <AccountBalanceIcon/> */}
            <ListItemText primary="Finance" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Attendance" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Main content goes here.
        </Typography>
      </Box>
    </Box>
  );
}
