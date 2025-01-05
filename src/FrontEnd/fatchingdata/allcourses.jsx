import React, { useEffect, useState } from "react";
import BlogSection from "../components/blogcard";
import Navbar from "../components/navbar";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

 useEffect(() => {
     fetch("/src/BackEnd/mocdata/courses/coursesdata.json")
       .then((response) => response.json())
       .then((data) => setCourses(data))
       .catch((error) => console.error("Error fetching student data:", error));
   }, []);

  return 
  (
    <>
    <Navbar title="Admin Panel" link="/admin" color="#1A73E8" />
    <BlogSection courses={courses} />;

    </>
  )
  
};

export default AllCourses;
