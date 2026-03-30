// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNpXOurzwaOfEOalFJwC2PQegBmv1mGtU",
  authDomain: "lernlingo-88eb4.firebaseapp.com",
  databaseURL: "https://lernlingo-88eb4-default-rtdb.firebaseio.com",
  projectId: "lernlingo-88eb4",
  storageBucket: "lernlingo-88eb4.firebasestorage.app",
  messagingSenderId: "868155869528",
  appId: "1:868155869528:web:b1480e9ad6749223687d2d",
  measurementId: "G-QBZ09VWW85",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
