import './index.css'
import App from './App.jsx'
// import Admin from './pages/admin.js'


createRoot(document.getElementById('root')).render(

  <>
  <NextUIProvider> 
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} > </Route>
        {/* <Route path="/admin" element={ <Admin/> }></Route> */}
      </Routes>
    </BrowserRouter>
  </NextUIProvider>
  </>
  
)
