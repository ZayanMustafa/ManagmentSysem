import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dropdown from '../components/dropdown';
import SubmitBtn from '../components/submitbtn';
// import Dropdown from './Dropdown';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function SendAlert() {
  const [open, setOpen] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState('');
  const [alertMessage, setAlertMessage] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleAlertMessageChange = (event) => {
    setAlertMessage(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Alert Type:', dropdownValue);
    console.log('Message:', alertMessage);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Send Alert
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 2, top: 2, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          < Dropdown
            label="Send To"
            name="sendTo"
            value={dropdownValue}
            onChange={handleDropdownChange}
            options={['Teachers', 'Students', 'Both']}
          />
          <TextField
            fullWidth
            multiline
            margin="normal"
            label="Alert Message"
            value={alertMessage}
            onChange={handleAlertMessageChange}
          />
        </DialogContent>
        <DialogActions>
        <SubmitBtn 
            label="Submit" 
            color="green" 
            notifyMessage="Form submitted successfully!" 
            onClose={handleSubmit} 
          />
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
