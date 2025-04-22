// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: "my-portfolio-3fc7f.firebaseapp.com",
  projectId: "my-portfolio-3fc7f",
  storageBucket: "my-portfolio-3fc7f.firebasestorage.app",
  messagingSenderId: "295381599649",
  appId: "1:295381599649:web:b1ea6502f6bc3c2bc877e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}
