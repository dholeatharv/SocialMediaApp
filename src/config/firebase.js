// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQpevFYK9m817n3Adm3GluBgFWb2smD-k",
  authDomain: "react-app-2f856.firebaseapp.com",
  projectId: "react-app-2f856",
  storageBucket: "react-app-2f856.firebasestorage.app",
  messagingSenderId: "536177623409",
  appId: "1:536177623409:web:c4b771adca4fb354b5f6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)