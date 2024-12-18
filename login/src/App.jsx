import React from 'react'
import Home from './Components/Home'
import DashBoard from './Components/DashBoard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './Components/SignIn'

function App() {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Dashbord' element={<DashBoard />} />
                <Route path='/Signin' element={<SignIn />} />
            </Routes>
        </BrowserRouter >
        

    )
}

export default App