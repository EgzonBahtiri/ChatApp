// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMUpyna5dZU4e86sIm603xSkOIOW80I6Q",
  authDomain: "chatapp-8826f.firebaseapp.com",
  projectId: "chatapp-8826f",
  storageBucket: "chatapp-8826f.appspot.com",
  messagingSenderId: "726782709729",
  appId: "1:726782709729:web:695c8a68b8e0af113ccca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
