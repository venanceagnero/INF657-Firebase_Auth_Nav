// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey:"AIzaSyACPwp6zQBmBPyI5k8xJyB46pH9YcHc9Sk",
    // process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BOCKECT,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

///  apiKey:"AIzaSyACPwp6zQBmBPyI5k8xJyB46pH9YcHc9Sk",
//  authDomain: "mobile2taskmanager.firebaseapp.com",
// projectId: "mobile2taskmanager",
// storageBucket: "mobile2taskmanager.appspot.com",
//  messagingSenderId: "767522941955",
//  appId: "1:767522941955:web:8fd644fee7461ab5997236"
;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app; 