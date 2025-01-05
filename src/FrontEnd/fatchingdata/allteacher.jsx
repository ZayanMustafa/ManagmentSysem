import React, { useEffect, useState } from "react";
import DataTable from "../components/datatable";
import Navbar from "../components/navbar";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/src/BackEnd/mocdata/teachers/teacherdata.json")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, []);

  return (
    <>
    < Navbar title="Admin Panel" link="/admin" color="#1A73E8" /> 
    < DataTable data={ teachers} color="#1A73E8" type="teacher" />;
    </>
  ) 
};

export default AllTeachers;
