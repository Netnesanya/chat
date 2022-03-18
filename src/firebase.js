// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdutc0Q3qS-Syj2YGyo95bMltualGp_M0",
  authDomain: "nssoftchatproj.firebaseapp.com",
  projectId: "nssoftchatproj",
  storageBucket: "nssoftchatproj.appspot.com",
  messagingSenderId: "27513593605",
  appId: "1:27513593605:web:15ec3f7a5bf479317ee16c",
  measurementId: "G-FQVRTHMWFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);