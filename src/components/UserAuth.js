import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Navigate } from "react-router-dom";
import React from "react"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2KL_C2KpIZSGlDN4kff9uOb-jn9RuKjA",
    authDomain: "note-ify-be488.firebaseapp.com",
    projectId: "note-ify-be488",
    storageBucket: "note-ify-be488.appspot.com",
    messagingSenderId: "85174083605",
    appId: "1:85174083605:web:65eab263c0abc2092e2e1c",
    measurementId: "G-84QR1XJC5Q"
};

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