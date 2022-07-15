import React from 'react'
// import { handleLogin } from './UserAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export const SignIn = ({ loginToSignUp, userInput, handleInputChange, setIsLoggedin }) => {

    function handleLogin(e, email, password) {
        e.preventDefault();
        console.log(email, password)
        const auth = getAuth()

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
        <div className="login--form">
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
                    <a onClick={loginToSignUp}>Sign up Here!</a></p>
            </div>
        </div>
    )
}
