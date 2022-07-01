// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPQMK4_k127NgWL5hLveLnDjZbI4lqbhw",
  authDomain: "react-crud-b5081.firebaseapp.com",
  projectId: "react-crud-b5081",
  storageBucket: "react-crud-b5081.appspot.com",
  messagingSenderId: "280368460162",
  appId: "1:280368460162:web:f54050a4f4540fa0bd5f9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);
export default db;