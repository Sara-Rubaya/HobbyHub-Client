


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKuxwC0JC5uBxqMFNoJm-f-3LyrH55eYA",
  authDomain: "hobby-hub-7dbc0.firebaseapp.com",
  projectId: "hobby-hub-7dbc0",
  storageBucket: "hobby-hub-7dbc0.firebasestorage.app",
  messagingSenderId: "765242350004",
  appId: "1:765242350004:web:6d9e3fdb44d7ee110cfae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);