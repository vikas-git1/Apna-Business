import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl7exWflDpCQma-yJPWgLAI7_8XRuOSjY", // ✅ Key from your Firebase web app
  authDomain: "apna-business-65c23.firebaseapp.com",
  projectId: "apna-business-65c23",
  storageBucket: "apna-business-65c23.appspot.com", // ✅ fixed this
  messagingSenderId: "331277405781",
  appId: "1:331277405781:web:2a943f769ac682192e4edc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
