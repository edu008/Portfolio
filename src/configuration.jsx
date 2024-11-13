// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrAoGxN8vQwWd7PR2vZGAdCKuv0Wo5xs",
  authDomain: "eduanroci.firebaseapp.com",
  databaseURL: "https://eduanroci-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eduanroci",
  storageBucket: "eduanroci.firebasestorage.app",
  messagingSenderId: "505401772167",
  appId: "1:505401772167:web:813f5c62c08c8ae0a15022",
  measurementId: "G-XB2EXE6CF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
