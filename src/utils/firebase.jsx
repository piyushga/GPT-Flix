// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5rUkWyATG4-dmsX0OJNYZDHPzpHDyG7c",
  authDomain: "gptflix-21.firebaseapp.com",
  projectId: "gptflix-21",
  storageBucket: "gptflix-21.firebasestorage.app",
  messagingSenderId: "1085410684749",
  appId: "1:1085410684749:web:9c8c3409cc01d732291104",
  measurementId: "G-FR03MBMGQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
