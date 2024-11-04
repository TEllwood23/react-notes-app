// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBASo5Fao8_Hq0W1rVrqiNAafV1nFp9jjw",
  authDomain: "react-notes-app-8a60f.firebaseapp.com",
  projectId: "react-notes-app-8a60f",
  storageBucket: "react-notes-app-8a60f.firebasestorage.app",
  messagingSenderId: "286010250114",
  appId: "1:286010250114:web:1a305d2e1381e1eb25359b",
  measurementId: "G-C6QK15ZPY8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
