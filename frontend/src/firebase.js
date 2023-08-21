// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRr2Hn0bhNFXrqCh0XQT5eb_LXctEupyc",
  authDomain: "cdas-266ca.firebaseapp.com",
  projectId: "cdas-266ca",
  storageBucket: "cdas-266ca.appspot.com",
  messagingSenderId: "871943354626",
  appId: "1:871943354626:web:79d4274c9f2f270d242a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}