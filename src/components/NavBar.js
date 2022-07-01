import React from 'react'
import { NavLink } from 'react-router-dom'
import NoteLogo from "../images/note-logo.png"

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className="appLogo">
                <img className="logo" src={NoteLogo} alt="notes app logo"></img>
                <p>Note-ify</p>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="Sidebar">Notes</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    )
}

export default NavBar