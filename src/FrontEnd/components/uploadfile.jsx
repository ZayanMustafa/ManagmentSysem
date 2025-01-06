import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const notify = (message) => {
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

const notifyError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default function InputFileUpload({ color, notifyMessage }) {
  const [uploadStatus, setUploadStatus] = useState('Upload files');
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const validExtensions = ['application/pdf', 'application/vnd.ms-excel'];

    if (file && validExtensions.includes(file.type)) {
      setUploadStatus('Uploading...');
      setTimeout(() => {
        setUploadStatus('File uploaded');
        setFileUploaded(true);
      }, 2000); 
    } else {
      notifyError('Unsupported file type. Please upload a .pdf or .xls file.');
    }
  };

  // const handleSubmit = () => {
  //   if (fileUploaded) {
  //     notify(notifyMessage);
  //   }
  // };

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ backgroundColor: fileUploaded ? 'gray' : color, '&:hover': { backgroundColor: fileUploaded ? 'gray' : color } }}
      >
        {uploadStatus}
        <VisuallyHiddenInput
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.xls"
          multiple
        />
      </Button>
      
      Only accept .pdf and .xls 
      <ToastContainer />
    </>
  );
}
