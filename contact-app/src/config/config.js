// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFWxXJRW9mlrMbJrHu133457jdeD3mA4g",
  authDomain: "contact-app-e97a7.firebaseapp.com",
  projectId: "contact-app-e97a7",
  storageBucket: "contact-app-e97a7.appspot.com",
  messagingSenderId: "788961828262",
  appId: "1:788961828262:web:8401d37f717b0a5373c367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore=getFirestore(app);