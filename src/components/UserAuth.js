import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"


// INIT APP HERE FOR FIREBASE

initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

//GET AUTH
const auth = getAuth();



//HANDLE SIGN UP 
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


// HANDLE LOGIN 
// function handleLogin(e, email, password) {
//     e.preventDefault();
//     console.log(email, password)
//     const auth = getAuth()

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredentials) => {
//             console.log(userCredentials)
//         })
//         .catch((err) => {
//             console.log(err.message)
//         })
// }


export { auth, handleSignUp }