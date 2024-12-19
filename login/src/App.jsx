import React from 'react'
import Home from './Components/Home'
import DashBoard from './Components/DashBoard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'
import AdminSingnUp from './Components/AdminSingnUp'

function App() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/homepage' element={<Home />} />
                <Route path='/Dashboard' element={<DashBoard />} />
                <Route path='/adminsignup' element={<AdminSingnUp />} />
                <Route path='homepage/*' element={<Home />} />
            </Routes>
        </BrowserRouter >
        

    )
}

export default App