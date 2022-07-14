import React from 'react'

export const SignIn = ({ toggleNewUser, handleSignIn, userInput, handleInputChange }) => {




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
                    <a onClick={toggleNewUser}>Sign up Here!</a></p>
            </div>
        </div>
    )
}
