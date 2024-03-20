import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import Success from './Component/Success'
import Cancel from './Component/Cancel'



function App() {

  return (
    <>
     <Routes>
           <Route path='/' element={<Home/>}  />
           <Route path='/success' element={<Success/>}  />
           <Route path='/cancel' element={<Cancel/>}  />
     </Routes>
    </>
  )
}

export default App
