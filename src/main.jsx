import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

  <>
  <NextUIProvider> 
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} ></Route>

      </Routes>
    </BrowserRouter>
  </NextUIProvider>
  </>
  
)
