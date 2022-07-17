import React from 'react'
import { auth, signInWithEmailAndPassword } from "./UserAuth"
import { useNavigate } from 'react-router-dom';
import NoteLogo from "../images/note-logo.png"


export const SignIn = ({ setIsLoggedin }) => {


    const navigate = useNavigate();

    const logo = <img className="frontPageLogo" src={NoteLogo} alt="notes app logo"></img>

    const [userInput, setUserInput] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleInputChange(evt) {
        let value = evt.target.value;

        setUserInput(prevState => {
            return {
                ...prevState,
                [evt.target.name]: value
            }
        })
    }

    function navigateToSignUp() {
        navigate("/signup")
    }

    function handleLogin(e, email, password) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials)
                setIsLoggedin(true)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <>
            <section className="sidebar--design">
                <div className="fp--logoContainer">
                    {logo}
                    <h1>Note-ify</h1>
                </div>
            </section>

            <section className="userAuth--design">
                <div className="input--form">
                    <h1>Account Login</h1>
                    <form className="">
                        <div className="input--fields">

                            <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                id="email"
                                value={userInput.email}
                                name="email"
                                onChange={handleInputChange}
                                required />

                            <label htmlFor="password">Password</label>
                            <input
                                type='password'
                                id='password'
                                value={userInput.password}
                                name="password"
                                onChange={handleInputChange}
                                required />

                            <button className="login-btn"
                                onClick={(e) => handleLogin(e, userInput.email, userInput.password)}>Login</button>
                        </div>
                    </form>
                    <div className="newUser">
                        <p>Don't have an account?
                            <a onClick={navigateToSignUp}>Sign up Here!</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}
