import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

export const notify = (message, type = "success") => {
  if (type === "success") {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === "error") {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

const SubmitBtn = ({ label, color, notifyMessage, onClose , btnsize , disable }) => {
  const handleClick = () => {
    notify(notifyMessage);
    setTimeout(() => {
      onClose(); // Close dialog after 3 seconds
    }, 3000); 
  };

  return (
    <Button
      variant="contained"
      type="button"
      sx={{ backgroundColor: color, '&:hover': { backgroundColor: color } }}
      onClick={handleClick}
      size={btnsize}
      disable= {disable}
    >
      {label}
    </Button>
  );
};

export default SubmitBtn;
