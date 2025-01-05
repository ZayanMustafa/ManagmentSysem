import React from "react";
import { Avatar, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ImageUpload = ({ imagePreview, onImageChange }) => (
  <IconButton
    sx={{
      width: 120,
      height: 120,
      borderRadius: "50%",
      backgroundColor: "#e0e0e0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
    }}
    component="label"
  >
    <input type="file" hidden accept="image/*" onChange={onImageChange} />
    {imagePreview ? (
      <Avatar src={imagePreview} sx={{ width: 120, height: 120 }} />
    ) : (
      <Avatar sx={{ width: 120, height: 120 }}>TA</Avatar>
    )}
    <CameraAltIcon sx={{ position: "absolute", bottom: 0, right: 0 }} />
  </IconButton>
);

export default ImageUpload;
