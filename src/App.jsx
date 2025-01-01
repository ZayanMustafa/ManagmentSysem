import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./FrontEnd/pages/adminpage/adminmain";
import SignIn from "./FrontEnd/auth/signin";
import NotFound from "./FrontEnd/error/pagenotfound";
import ErrorPage from "./FrontEnd/error/error";
import StudentPage from "./FrontEnd/pages/studentpage/studentmain";
import TeacherPage from "./FrontEnd/pages/teacherpage/teachermain";

export default function App() {
  return (
    <>
    {/* <NextUIProvider>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< SignIn />}></Route> 
          <Route path="/admin" element={< AdminPage />}></Route> 
          <Route path="*" element={ <NotFound/> }></Route>
          <Route path="/error" element={ <ErrorPage/> }></Route>
          <Route path="/student" element={ <StudentPage/> }></Route>
          <Route path="/teacher" element={ <TeacherPage/> }></Route>
        </Routes>
      </BrowserRouter>
    {/* </NextUIProvider> */}
    </>
  )
} 