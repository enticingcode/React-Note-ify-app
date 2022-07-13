import React from 'react'

export const SignIn = ({ toggleNewUser }) => {


    function handleLogin(e) {
        e.preventDefault();
        console.log('sign in')
    }

    return (
        <div className="login--form">
            <h1>Account Login</h1>
            <form className="">
                <div className="input--fields">
                    <label htmlFor="email">Email</label>
                    <input type='email' id="email" required />
                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' required />
                    <button className="login-btn"
                        onClick={handleLogin}>Login</button>
                </div>
            </form>
            <div className="newUser">
                <p>Don't have an account?
                    <a onClick={toggleNewUser}>Sign up Here!</a></p>
            </div>
        </div>
    )
}
