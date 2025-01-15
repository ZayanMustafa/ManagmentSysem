import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CustomizedDialogs from '../alerts/sendalerts';

const AdminDrawer = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <Drawer open={true} onClose={() => {}}>
        <div className={classes.list}>
          <List>
            <ListItem button onClick={handleOpenDialog}>
              <ListItemText primary="Send Alert" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <CustomizedDialogs open={openDialog} onClose={handleCloseDialog} />
    </div>
  );
};

export default AdminDrawer;
