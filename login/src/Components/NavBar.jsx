import React from 'react'
import { Link } from 'react-router-dom'
import '../style/NavBar.css'


function NavBar() {
    return (
        <div className='Navbar'>
            <div className="links">
                <Link to='/homepage/about'>About</Link>
                <Link to='/homepage/dashboard'>DashBoard</Link>
                <Link to='/'>Logout</Link>
            </div>
        </div>
    )
}

export default NavBar