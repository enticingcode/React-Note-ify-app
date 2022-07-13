import React from "react"
import NoteLogo from "../images/note-logo.png"
import SaveSession from "./SaveSession"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"
import { handleLogin, handleSignUp } from "./UserAuth"


const FrontPage = ({ createNewNote, isLoggedIn, setIsLoggedIn }) => {
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



    React.useEffect(() => {
        // SaveSession("userInput", userInput)
        console.log(userInput)
    }, [userInput])

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
                {existingUser ?
                    <SignIn
                        toggleNewUser={toggleSignUp}
                        setUserInput={setUserInput}
                        handleLogin={handleLogin}
                        userInput={userInput}
                        handleInputChange={handleInputChange}
                    />
                    :
                    <SignUp
                        toggleNewUser={toggleSignUp}
                        handleSignUp={handleSignUp}
                        setUserInput={setUserInput}
                        userInput={userInput}
                        handleInputChange={handleInputChange}
                    />
                }
            </section >
        </div >
    )
}

export default FrontPage