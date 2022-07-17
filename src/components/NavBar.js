import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import NoteLogo from "../images/note-logo.png"
import chevron from "../images/chevron.svg"
import leftchev from "../images/leftchev.svg"
import home from "../images/home.svg"
import notes from "../images/notes.svg"
import contact from "../images/contact.svg"


const NavBar = (props) => {


    const [showNav, setShowNav] = React.useState(false)

    function toggleSideBar() {
        setShowNav(prevState => !prevState)
    }

    const logo = <img className="logo" src={NoteLogo} alt="notes app logo"></img>

    return (
        <nav className={
            `navbar ${showNav ? "show" : "hidden"}`
        }>
            <div className="appLogo">
                {showNav ?
                    <>
                        <img
                            className="logo"
                            src={NoteLogo}
                            alt="notes app logo"></img>
                        <p>Note-ify</p>
                    </>
                    : logo
                }
            </div>
            <NavLink to="home">
                {showNav ? "Home" : <img src={home} />}
            </NavLink>

            <NavLink to={`/notes`} >
                {showNav ? "Notes" : <img src={notes} />}
            </NavLink>

            <NavLink to="/contact">
                {showNav ? "Contact" : <img src={contact} />}
            </NavLink>

            <div className="toggleContainer">
                <img className={`sidebar--toggle ${showNav ? "show" : ""}`}
                    onClick={toggleSideBar} src={showNav ? leftchev : chevron} />
            </div>
        </nav >
    )
}

export default NavBar