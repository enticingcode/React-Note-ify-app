import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc } from "firebase/firestore"


import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"


// INIT APP HERE FOR FIREBASE


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);


const auth = getAuth();

const db = getFirestore(app)


async function pullData() {
    const docRef = await getDocs(collection(db, "notes"))
    docRef.forEach((doc) => {
        // console.log(doc.data())
    })

}

function newFSnote(note) {
    addDoc(collection(db, "notes"), note)
    console.log(note);
}

function editFSnote(note) {
    updateDoc(collection(db, 'notes'))
}

pullData();


export { auth, signInWithEmailAndPassword, newFSnote }