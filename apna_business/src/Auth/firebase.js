// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7exWflDpCQma-yJPWgLAI7_8XRuOSjY",
  authDomain: "apna-business-65c23.firebaseapp.com",
  projectId: "apna-business-65c23",
  storageBucket: "apna-business-65c23.firebasestorage.app",
  messagingSenderId: "331277405781",
  appId: "1:331277405781:web:2a943f769ac682192e4edc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
