import React, { useEffect, useState } from "react";
import DataTable from "../../BackEnd/datatable/datatable";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/mocdata/teacherdata.json")
      .then((response) => response.json())
      .then((data) => setTeachers(data))
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, []);

  return < DataTable data={teachers} color="#4caf50" type="teacher" />;
};

export default AllTeachers;
