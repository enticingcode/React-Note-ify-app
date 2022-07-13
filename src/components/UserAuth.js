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


const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
}

const signIn = () => {

}

export { signUp, signIn } 