import React, { useState, useEffect } from "react";
import DataTable from "../components/datatable";
import Navbar from "../components/navbar";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/src/BackEnd/mocdata/students/studentdata.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <>
    <Navbar title="Admin Panel" link="/admin" color="#1A73E8" />
    <DataTable data={students} color="#1A73E8" type="student" />;
    </>
  )  
};

export default AllStudents;