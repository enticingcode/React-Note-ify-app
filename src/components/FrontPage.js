import React from "react"
import NoteLogo from "../images/note-logo.png"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const FrontPage = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const logo = <img className="frontPageLogo" src={NoteLogo} alt="notes app logo"></img>

    const [toggleLogin, setToggleLogin] = React.useState(true);

    const [userInput, setUserInput] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })


    function loginToSignUp() {
        setToggleLogin(prevState => !prevState)
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



    React.useEffect(() => {
        toggleLogin ? navigate("login") : navigate("signup")
    }, [toggleLogin])




    return (
        <div className="frontPage">
            <section className="sidebar--design">
                <div className="fp--logoContainer">
                    {logo}
                    <h1>Note-ify</h1>
                </div>
            </section>

            <section className="userAuth--design">
                <Routes>
                    <Route path="login" element={
                        <SignIn
                            loginToSignUp={loginToSignUp}
                            userInput={userInput}
                            handleInputChange={handleInputChange}
                            setIsLoggedin={setIsLoggedIn}
                        />}
                    />
                    <Route path="signup" element={
                        <SignUp
                            loginToSignUp={loginToSignUp}
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