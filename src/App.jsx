import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {NextUIProvider} from '@nextui-org/react'
import NotFound from "./error/pagenotfound";
import SignIn from "./FrontEnd/auth/signin";
import ErrorPage from "./FrontEnd/error/error";
import LowInternet from "./FrontEnd/error/lowinternet";
import AdminPage from "./FrontEnd/pages/adminpage/adminmain";
import TeacherPage from "./FrontEnd/pages/teacherpage/teachermain";
import StudentPage from "./FrontEnd/pages/studentpage/studentmain";

export default function App() {
  return (
    <>
    {/* <NextUIProvider>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< SignIn />}></Route>
          <Route path="/*" element={< NotFound/>}></Route>
          <Route path="/error" element={< ErrorPage />}></Route>
          <Route path="/signin" element={< SignIn />}></Route>
          <Route path="/admin" element={< AdminPage />}></Route>
          <Route path="/teacher" element={< TeacherPage />}></Route>
          <Route path="/student" element={< StudentPage />}></Route>
          <Route path="/loading" element={< LowInternet />}></Route>

        </Routes>
      </BrowserRouter>
    {/* </NextUIProvider> */}
    </>

  )
}