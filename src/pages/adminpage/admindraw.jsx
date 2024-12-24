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
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Book as BookIcon,
  AccountBalance as AccountBalanceIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import React from 'react';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function AdminSlidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(!isMobile);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  React.useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

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
          <Typography variant="h6" noWrap sx={{ flexGrow: 1, color: 'white' }}>
            Admin 2nd
          </Typography>
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
          </Search>
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
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem button>
            <PeopleIcon />
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem button>
            <BookIcon />
            <ListItemText primary="Courses" />
          </ListItem>
          <ListItem button>
            <AccountBalanceIcon/>
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
        sx={{ flexGrow: 1, p: 3, ml: { sm: `${drawerWidth}px` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Main content goes here.
        </Typography>
      </Box>
    </Box>
  );
}