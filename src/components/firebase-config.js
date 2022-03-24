// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm6LMuYup8B8_IbN3A6UIqkQwQ5Uqrx5s",
  authDomain: "expense-tracker-karol.firebaseapp.com",
  projectId: "expense-tracker-karol",
  storageBucket: "expense-tracker-karol.appspot.com",
  messagingSenderId: "348005566524",
  appId: "1:348005566524:web:024ba332e7f1d939c5db39",
  measurementId: "G-H4M62X0734",
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
