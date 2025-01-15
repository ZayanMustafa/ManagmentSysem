import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, Typography } from '@mui/material';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const StyledCard = styled(Card)`
  display: flex;
  margin: 16px 32px; /* Adds margin to top, bottom, left, and right */
  padding: 16px;
  background-color: #f7f9fc; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #d9e6f2; /* Slightly darker shade on hover */
    transform: translateY(-4px); /* Lift effect */
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 80px; 
  height: 80px;
  margin-right: 16px;
  border: 2px solid #4a90e2; 
`;

const StyledTypography = styled(Typography)`
  color: ${(props) => (props.primary ? '#4a90e2' : 'inherit')}; 
`;

const TeacherCard = ({ teacher }) => {
  return (
    <>
    <StyledCard>
      <StyledAvatar src={teacher.imageUrl ? teacher.imageUrl : teacher.name } alt={teacher.name} />
      <CardContent sx={{ flex: 1 }}>
        <StyledTypography variant="h6" component="div" primary>
          {teacher.name}
        </StyledTypography>
        <Typography variant="body2" color="text.secondary">
          {teacher.number}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teacher.subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teacher.experience}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teacher.department}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teacher.background}
        </Typography>
      </CardContent>
    </StyledCard>
    </>
  );
};

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
    <Navbar link={"/admin"} title={"Admin Pannel"} color={"primary"}></Navbar> 
    <div style={{ padding: '20px' }}>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </div>
    </>
  );
};

export default AllTeachers;
