import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function LogOut({ open, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"DO YOU WANT TO LOG OUT?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          In Case of Log Out, You can not access the system until you log in again.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button  onClick={onClose}>
          Keep SignIn
        </Button>
        <Button onClick={handleLogout} autoFocus>
          Logout 
        </Button>
      </DialogActions>
    </Dialog>
  );
}
