// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBYgUPOXioK2BQLVQJtkoziL2NLRVBlqs",
  authDomain: "autoclicker-24c73.firebaseapp.com",
  projectId: "autoclicker-24c73",
  storageBucket: "autoclicker-24c73.firebasestorage.app",
  messagingSenderId: "566161943710",
  appId: "1:566161943710:web:dede09dae16f87ce539f8f",
  measurementId: "G-ZPN3ZNQHPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const auth = getAuth(app);

export { firestore, auth };
