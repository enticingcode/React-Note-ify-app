import React from "react"
import NoteLogo from "../images/note-logo.png"
import SaveSession from "./SaveSession"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { handleLogin, handleSignUp } from "./UserAuth"
import { Navigate, useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const FrontPage = ({ createNewNote, isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();

    const logo = <img className="frontPageLogo" src={NoteLogo} alt="notes app logo"></img>

    const [existingUser, setExistingUser] = React.useState(true);

    const [userInput, setUserInput] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    function toggleSignUp() {
        setExistingUser(prevState => !prevState)
    }


    function handleInputChange(evt) {
        let value = evt.target.value;

        setUserInput(prevState => {
            return {
                ...prevState,
                [evt.target.name]: value
            }
        })
    }

    function testFireUser() {
        console.log('test')
    }

    React.useEffect(() => {
        existingUser ? navigate("login") : navigate("signup")
        // SaveSession("userInput", userInput)
        console.log(existingUser)
    }, [userInput, existingUser])

    return (
        <div className="frontPage">
            <section className="sidebar--design">
                <div className="fp--logoContainer">
                    {logo}
                    <h1>Note-ify</h1>
                    <button onClick={testFireUser}>check user</button>
                </div>
            </section>



            {/* this is where i will conditionally render login vs signup based on click */}


            <section className="userAuth--design">
                <Routes>
                    <Route path="login" element={
                        <SignIn
                            toggleNewUser={toggleSignUp}
                            setUserInput={setUserInput}
                            handleLogin={handleLogin}
                            userInput={userInput}
                            handleInputChange={handleInputChange}
                        />}
                    />
                    <Route path="signup" element={
                        <SignUp
                            toggleNewUser={toggleSignUp}
                            handleSignUp={handleSignUp}
                            setUserInput={setUserInput}
                            userInput={userInput}
                            handleInputChange={handleInputChange}
                        />}
                    />
                </Routes>
            </section >
        </div >
    )
}

export default FrontPage