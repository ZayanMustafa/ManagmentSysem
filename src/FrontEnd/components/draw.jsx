import React, { useState, useEffect } from 'react';
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Collapse,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import LogOut from '../auth/logout';

const SideDraw = ({ isMobile, drawerOpen, handleDrawerToggle, drawerWidth, listItems, subOptionLinks, color }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(drawerOpen);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [logoutOpen, setLogoutOpen] = useState(false);

  useEffect(() => {
    setIsDrawerOpen(drawerOpen);
  }, [drawerOpen]);

  const handleToggle = () => {
    if (isMobile) {
      setIsDrawerOpen(!isDrawerOpen);
      handleDrawerToggle();
    }
  };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleLogoutClick = () => {
    setLogoutOpen(true);
  };

  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={isDrawerOpen}
      onClose={handleToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: color.background },
      }}
    >
      <Toolbar>
        <IconButton onClick={handleToggle}>
          {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {listItems.slice(0, -1).map((item, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <ListItem
              button
              sx={{ color: color.primary }}
              onClick={() => handleSubMenuToggle(index)}
            >
              {item.icon}
              <ListItemText primary={item.text} />
              {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSubMenu === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subOptions.map((subOption, subIndex) => (
                  <ListItem
                    button
                    key={subIndex}
                    component={Link}
                    to={subOptionLinks[index][subIndex]}
                    sx={{ pl: 4, marginLeft: 2, color: color.accent, mb: 1 }}
                  >
                    <ListItemText primary={subOption} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <List>
        <ListItem
          button sx={{ color: 'black', mt: 1 }}
          onClick={handleLogoutClick}
        >
          {listItems[listItems.length - 1].icon}
          <ListItemText primary={listItems[listItems.length - 1].text} />
        </ListItem>
      </List>
      <LogOut open={logoutOpen} onClose={handleLogoutClose} />
    </Drawer>
  );
};

export default SideDraw;