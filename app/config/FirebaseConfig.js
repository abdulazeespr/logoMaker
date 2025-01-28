// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "logo-maker-a0c19.firebaseapp.com",
  projectId: "logo-maker-a0c19",
  storageBucket: "logo-maker-a0c19.firebasestorage.app",
  messagingSenderId: "640126570989",
  appId: "1:640126570989:web:1181b5f4ce854b72b597e4",
  measurementId: "G-NTK1EXMB47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);