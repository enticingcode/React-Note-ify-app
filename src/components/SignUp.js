import { getAuth } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router';
import NoteLogo from "../images/note-logo.png"


export const SignUp = ({ }) => {

    const navigate = useNavigate();

    const logo = <img className="frontPageLogo" src={NoteLogo} alt="notes app logo"></img>

    const [userInput, setUserInput] = React.useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    function handleSignUp(e, email, password, confirmPassword) {
        e.preventDefault();
        const auth = getAuth();
        if (confirmPassword != password) {
            console.log('passwords no match')
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((newUser) =>
                    console.log(newUser)
                )
        }
    }
    function navigateToLogin() {
        navigate("/")
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
                        <div className="newUser">
                            <p>Already have an account?
                                <a onClick={navigateToLogin}>Login Here!</a></p>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}





