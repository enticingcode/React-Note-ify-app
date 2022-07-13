import React from 'react'

export const SignUp = ({ toggleNewUser, handleSignUp, handleInputChange, userInput }) => {



    return (
        <div className="login--form">
            <h1>Account Sign-Up</h1>
            <form id="signup">
                <div className="input--fields">

                    <label htmlFor="email">Email</label>
                    <input
                        type='email'
                        id="email"
                        name="email"
                        value={userInput.email}
                        onChange={handleInputChange}
                        required />

                    <label htmlFor="password">Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={userInput.password}
                        onChange={handleInputChange}
                        required />

                    <label htmlFor="confirm-password"> Confirm Password</label>
                    <input
                        type='password'
                        id='confirm-password'
                        name='confirmPassword'
                        value={userInput.confirmPassword}
                        onChange={handleInputChange}
                        required />

                    <button
                        className="login-btn"
                        form="signup"
                        onClick={(e) => { handleSignUp(e, userInput.email, userInput.password, userInput.confirmPassword) }
                        }>Sign-Up</button>
                </div>
            </form>
            <div className="newUser">
                <p>Already have an account?
                    <a onClick={toggleNewUser}>Sign in here</a></p>
            </div>
        </div>
    )
}
