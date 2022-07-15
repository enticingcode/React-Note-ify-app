import { initializeApp } from "firebase/app";
import "firebase/auth"


// {
//     apiKey: "AIzaSyC2KL_C2KpIZSGlDN4kff9uOb-jn9RuKjA",
//         authDomain: "note-ify-be488.firebaseapp.com",
//             projectId: "note-ify-be488",
//                 storageBucket: "note-ify-be488.appspot.com",
//                     messagingSenderId: "85174083605",
//                         appId: "1:85174083605:web:1f49acd6364df0d42e2e1c",
//                             measurementId: "G-3V2X478E4T"
// }

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

// const analytics = getAnalytics(app);


export { app }

