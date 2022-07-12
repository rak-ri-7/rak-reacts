import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <img src="https://www.technovalley.co.in/wp-content/themes/technovalley/images/logo.png" alt="technovalley" width="130px"></img>
        <div className='navlink'>
        <NavLink activeClassName="active" to="/" className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
        <NavLink to="/login" className="link">Login</NavLink>
        <NavLink to="/animation" className="link">Animation</NavLink>
        </div>
    </div>
  )
}

export default Navbar