import React, { useEffect, useState } from "react";
import DataTable from "../../BackEnd/datatable/datatable";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/mocdata/studentdata.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return <  DataTable data={students} color="#1976d2" type="student" />;
};

export default AllStudents;
