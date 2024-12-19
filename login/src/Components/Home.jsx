import React from 'react'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import DashBoard from './DashBoard'
import About from './About'

function Home() {
  return (
    <>
      <NavBar/>
      <h1>Homepage</h1>
      <Routes>
        <Route path='/Dashboard' element={<DashBoard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default Home