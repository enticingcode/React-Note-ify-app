import { initializeApp } from "firebase/app";
import "firebase/auth"





// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env,
    projectId: "note-ify-be488",
    storageBucket: "note-ify-be488.appspot.com",
    messagingSenderId: "85174083605",
    appId: "1:85174083605:web:1f49acd6364df0d42e2e1c",
    measurementId: "G-3V2X478E4T"
});

const analytics = getAnalytics(app);