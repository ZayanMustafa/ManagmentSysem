import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./FrontEnd/pages/adminpage/adminmain";
import SignIn from "./FrontEnd/auth/signin";
import NotFound from "./FrontEnd/error/pagenotfound";
import ErrorPage from "./FrontEnd/error/error";
import StudentPage from "./FrontEnd/pages/studentpage/studentmain";
import TeacherPage from "./FrontEnd/pages/teacherpage/teachermain";
import AllStudent from "./FrontEnd/fatchingdata/allstudent";
import AllTeachers from "./FrontEnd/fatchingdata/allteacher";
import AllCourses from "./FrontEnd/fatchingdata/allcourses";
import AddTeacher from "./FrontEnd/forms/addteacherform";
import AddStudent from "./FrontEnd/forms/addstudentform";


export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={< SignIn />}></Route> 
            <Route path="*" element={< NotFound />}></Route>
            <Route path="/error" element={< ErrorPage />}></Route>
            
            <Route path="/admin" element={< AdminPage />}></Route> 
            <Route path="/student" element={< StudentPage />}></Route>
            <Route path="/teacher" element={< TeacherPage />}></Route>
            
            <Route path="/students/all" element={< AllStudent />}></Route>
            <Route path="/teachers/all" element={< AllTeachers />}></Route>
            <Route path="/courses/view" element={< AllCourses />}></Route>

            <Route path="/teachers/add" element={< AddTeacher />}></Route>
            <Route path="/students/add" element={< AddStudent />}></Route>

          </Routes>
      </BrowserRouter>
    </>
  );
}
