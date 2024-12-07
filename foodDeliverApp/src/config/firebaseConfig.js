import { initializeApp ,getApp,getApps} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APPWRITE_API_KEY,
    authDomain:import.meta.env.VITE_APPWRITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_APPWRITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APPWRITE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_APPWRITE_APP_ID,
};

const app = (getApps.length>0)?getApp() :initializeApp(firebaseConfig);
const auth=getAuth(app);
const firestore=getFirestore(app);

export {app,auth,firestore}