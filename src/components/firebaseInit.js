import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, addDoc, deleteDoc,
} from "firebase/firestore";




const firebaseConfig = {

    apiKey: "AIzaSyC3sb-4uopFNb7KnPWt1O0iRWOtU8CVajs",

    authDomain: "fir-9-dojo-a9076.firebaseapp.com",

    projectId: "fir-9-dojo-a9076",

    storageBucket: "fir-9-dojo-a9076.appspot.com",

    messagingSenderId: "981504752344",

    appId: "1:981504752344:web:9da755f900ca0c036fb5ad"

};

// initialize database 
initializeApp(firebaseConfig);


// get reference to service
const db = getFirestore();

// creat reference to collection 

const docRef = collection(db, "notes");


// Adding data to service

function addNote() {
    addDoc(docRef, {

    })
}

//deleting data from service

function deleteNote() {
    deleteDoc()
}
