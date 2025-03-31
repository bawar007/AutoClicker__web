// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc8jPAwn3_uYK9gwuftpDisoio8PqSqro",
  authDomain: "autoclicker2-4943d.firebaseapp.com",
  projectId: "autoclicker2-4943d",
  storageBucket: "autoclicker2-4943d.firebasestorage.app",
  messagingSenderId: "638673608223",
  appId: "1:638673608223:web:95e9c362c77050d7d7ff2a",
  measurementId: "G-6L59Y4DVZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const auth = getAuth(app);

export { firestore, auth };
