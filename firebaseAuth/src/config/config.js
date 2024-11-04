// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2YEE1bYR5PDrlFKAE0dUC4whgdNwgoOo",
  authDomain: "authentication-bd12c.firebaseapp.com",
  projectId: "authentication-bd12c",
  storageBucket: "authentication-bd12c.appspot.com",
  messagingSenderId: "792707090842",
  appId: "1:792707090842:web:671e627e06cc5069a89223",
  measurementId: "G-27HJWQRP2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const fireStore=getFirestore(app);
export const auth=getAuth(app);
export const googleAuthProvider= new GoogleAuthProvider();