// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWZNXqtvPv3uFgc97tLpIRNVmmadoulCI",
  authDomain: "cartgo-7fe78.firebaseapp.com",
  projectId: "cartgo-7fe78",
  storageBucket: "cartgo-7fe78.appspot.com",
  messagingSenderId: "478438470598",
  appId: "1:478438470598:web:8349c9aeb7082d4c4178c7",
  measurementId: "G-VRZP4TRB27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();

export { db, firebase };