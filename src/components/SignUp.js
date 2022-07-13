import React from 'react'

export const SignUp = ({ toggleNewUser }) => {

    function handleSignUp() {
        console.log("signup")
    }



    return (
        <div className="login--form">
            <h1>Account Sign-Up</h1>
            <form className="">
                <div className="input--fields">
                    <label htmlFor="email">Email</label>
                    <input type='email' id="email" required />
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' required />
                    <label htmlFor="confirm-password"> Confirm Password</label>
                    <input type='password' id='confirm-password' required />
                    <button className="login-btn"
                        onClick={handleSignUp}>Sign-Up</button>
                </div>
            </form>
            <div className="newUser">
                <p>Already have an account?
                    <a onClick={toggleNewUser}>Sign in here</a></p>
            </div>
        </div>
    )
}
