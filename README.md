// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8FdJfIBAkgHN-P3bddFxzmuMjfo7NO3w",
  authDomain: "hemophilia-cv.firebaseapp.com",
  projectId: "hemophilia-cv",
  storageBucket: "hemophilia-cv.firebasestorage.app",
  messagingSenderId: "1098126163178",
  appId: "1:1098126163178:web:20b1f6bc37d47c788e2b93",
  measurementId: "G-EYMF8KYXHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);