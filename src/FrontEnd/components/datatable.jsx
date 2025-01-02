import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const DataTable = ({ data, color, type }) => {

    const headings =
    type === "student"
      ? ["ID", "Name", "Age", "Course", "Batch"]
      : ["ID", "Name", "Subject", "Experience", "Department"];

  const renderTableRows = (data) => {
    return data.map((item) => (
      <TableRow key={item.id}>
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.name}</TableCell>
        {type === "student" ? (
          <>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.course}</TableCell>
            <TableCell>{item.batch}</TableCell>
          </>
        ) : (
          <>
            <TableCell>{item.subject}</TableCell>
            <TableCell>{item.experience}</TableCell>
            <TableCell>{item.department}</TableCell>
          </>
        )}
      </TableRow>
    ));
  };

  return (
    <Box sx={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {type === "student" ? "All Students" : "All Teachers"}
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: color || "#1976d2" }}>
              {headings.map((heading) => (
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }} key={heading}>
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{renderTableRows(data)}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTable;
