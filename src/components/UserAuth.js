import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Navigate } from "react-router-dom";
import React from "react"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


initializeApp(firebaseConfig);


const auth = getAuth()


function handleSignUp(e, email, password, confirmPassword) {
    e.preventDefault();
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



function handleLogin(e, email, password) {
    e.preventDefault();
    console.log(email, password)
    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
        })
        .then(() => {
            return <Navigate to="home" />
        })
        .catch((err) => {
            console.log(err.message)
        })
}



export { auth, handleLogin, handleSignUp } 