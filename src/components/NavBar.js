import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import NoteLogo from "../images/note-logo.png"

const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <div className="appLogo">
                <img className="logo" src={NoteLogo} alt="notes app logo"></img>
                <p>Note-ify</p>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to={`/notes/${props.noteTitle}`} >Notes</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav >
    )
}

export default NavBar