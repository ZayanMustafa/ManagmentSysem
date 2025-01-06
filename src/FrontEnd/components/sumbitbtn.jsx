import React from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const SubmitBtn = ({ label, color, notifyMessage }) => {
  const handleClick = () => {
    notify(notifyMessage);
  };

  return (
    <>
      <Button
        variant="contained"
        type="button"
        sx={{ backgroundColor: color, '&:hover': { backgroundColor: color } }}
        onClick={handleClick}
      >
        {label}
      </Button>
      <ToastContainer />
    </>
  );
};

export default SubmitBtn;
