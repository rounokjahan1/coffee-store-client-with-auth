// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_hd47bBfz9_J4jcj7Rf3DHKuuwOEbTfg",
  authDomain: "coffee-store-7bd95.firebaseapp.com",
  projectId: "coffee-store-7bd95",
  storageBucket: "coffee-store-7bd95.firebasestorage.app",
  messagingSenderId: "381962886413",
  appId: "1:381962886413:web:776fa2d5f1a7b9de56e444"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
