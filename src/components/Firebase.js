import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMCpb4nF_3l0DWQjwAuOwlFxh8rNKYJfY",
  authDomain: "blood-67bb0.firebaseapp.com",
  projectId: "blood-67bb0",
  storageBucket: "blood-67bb0.appspot.com",
  messagingSenderId: "46438930469",
  appId: "1:46438930469:web:7128139582935e54c947cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      console.log(result);

      // localStorage.removeItem("name")
      // localStorage.removeItem("email")

      // window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};