import React from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const notify = () => {
  toast.success("Form submitted successfully! ✅", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const SubmitBtn = ({ label, color }) => (
  <>
    <Button
      variant="contained"
      type="submit"
      sx={{ backgroundColor: color, '&:hover': { backgroundColor: color } }}
      onClick={notify}  
    >
      {label}
    </Button>

    <ToastContainer />  
  </>
);

export default SubmitBtn;
