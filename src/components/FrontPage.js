import React from "react"
import NoteLogo from "../images/note-logo.png"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"


const FrontPage = ({ createNewNote }) => {
    const logo = <img className="frontPageLogo" src={NoteLogo} alt="notes app logo"></img>

    const [existingUser, setExistingUser] = React.useState(true);

    const [input, setInput] = React.useState({
        email: "",
        password: ""
    })

    function toggleSignUp() {
        setExistingUser(prevState => !prevState)
    }

    return (
        <div className="frontPage">
            <section className="sidebar--design">
                <div className="fp--logoContainer">
                    {logo}
                    <h1>Note-ify</h1>
                </div>
            </section>

            {/* this is where i will conditionally render login vs signup based on click */}


            <section className="userAuth--design">
                {existingUser ? <SignIn toggleNewUser={toggleSignUp} />
                    :
                    <SignUp toggleNewUser={toggleSignUp} />
                }
            </section >
        </div >
    )
}

export default FrontPage