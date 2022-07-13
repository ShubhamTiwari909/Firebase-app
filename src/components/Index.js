import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Routings from './Routes/Routes'
import Footer from './Footer'
import "tailwindcss/tailwind.css"
import {
  getAuth, GoogleAuthProvider, onAuthStateChanged,signInWithPopup, signOut
}
  from 'firebase/auth';
import { FaArrowCircleUp } from 'react-icons/fa';

function Index() {
  const [googleSignin, setGoogleSignin] = useState(false)
  const [userData, setUserData] = useState(null)
  const [quoteCategory, setQuoteCategory] = useState("")
  const auth = getAuth()
  const googleAuthProvider = new GoogleAuthProvider()
  const navigation = useNavigate()

  useEffect(() => {
    if(!googleSignin){
      setTimeout(() => {
        onAuthStateChanged(auth,(current) => {
          setUserData(current)
          setGoogleSignin(true)
        })
      }, 2000);
    }
    else{
      console.log("not found")
    }
  },[googleSignin])
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => {
        if (result !== []) {
          setGoogleSignin(true)
          setUserData(result)
          navigation('/home')
          toast.success("Signed in successfully", {
            theme: "dark"
          })
        }
      })
  }

  const signOutWithGoogle = () => {
    signOut(auth, googleAuthProvider).then("sign out successfully")
    setGoogleSignin(false)
    setUserData(null)
    navigation('/')
    toast.error("Signed out", {
      theme: "dark"
    })
  }


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
    <div>

      <Navbar googleSignin={googleSignin} quoteCategory={quoteCategory} setQuoteCategory={setQuoteCategory}
        signUpWithGoogle={signUpWithGoogle} signOutWithGoogle={signOutWithGoogle} userData={userData} />

      <div>
        <ToastContainer className="w-2/3 lg:w-1/5" />
      </div>

      <div>
        <button className="fixed bottom-0 right-0 mr-5 my-10 hover:animate-pulse"><FaArrowCircleUp color="#AC3BFF" size="2rem" onClick={scrollToTop} /></button>
      </div>
      
      <Routings signUpWithGoogle={signUpWithGoogle} quoteCategory={quoteCategory} userData={userData} />
      <Footer />
    </div>
  );
}

export default Index