// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXOlNGPsT7YGatetk9KcsCdH5X2XZstP0",
  authDomain: "chat-app-3010a.firebaseapp.com",
  projectId: "chat-app-3010a",
  storageBucket: "chat-app-3010a.appspot.com",
  messagingSenderId: "1083125323940",
  appId: "1:1083125323940:web:ab9024b4f7823a51012e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)