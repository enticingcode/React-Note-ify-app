import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {

    apiKey: "AIzaSyC3sb-4uopFNb7KnPWt1O0iRWOtU8CVajs",

    authDomain: "fir-9-dojo-a9076.firebaseapp.com",

    projectId: "fir-9-dojo-a9076",

    storageBucket: "fir-9-dojo-a9076.appspot.com",

    messagingSenderId: "981504752344",

    appId: "1:981504752344:web:9da755f900ca0c036fb5ad"

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
        .catch((err) => {
            console.log(err.message)
        })
}

export { auth, handleLogin, handleSignUp } 