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
            <NavLink to="notes">Notes</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    )
}
{/* <Routes>
                <Route path="" element={<Home />} />
                <Route path="notes" element={<Notes />} />
                <Route path="contact" element={<Contact />} />
            </Routes> */}
export default NavBar