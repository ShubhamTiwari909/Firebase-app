import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';
import Landing from './Landing'
import Add from './Add'
import Update from './Update';
import Profile from './Profile'
import Home from './Home';
import Details from './Details';
import UserProfile from './UserProfile';
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
  console.log(userData)
  const navigation = useNavigate()

  useEffect(() => {
    if(!googleSignin){
      setTimeout(() => {
        onAuthStateChanged(auth,(current) => {
          setUserData(current)
          setGoogleSignin(true)
        })
      }, 2000);
      console.log("found auth state")
    }
    else{
      console.log("not found")
    }
  },[userData,googleSignin])
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
        signUpWithGoogle={signUpWithGoogle} signOutWithGoogle={signOutWithGoogle} />

      <div>
        <ToastContainer className="w-2/3 lg:w-1/5" />
      </div>
      <div>
        <button className="fixed bottom-0 right-0 mr-5 my-10 hover:animate-pulse"><FaArrowCircleUp color="#AC3BFF" size="2rem" onClick={scrollToTop} /></button>
      </div>
      <Routes>
        <Route exact path='/' element={<Landing signUpWithGoogle={signUpWithGoogle} />} />
        <Route exact path='/home' element={<Home quoteCategory={quoteCategory} />} />
        <Route exact path='/profile' element={<Profile userData={userData} />} />
        <Route exact path='/add' element={<Add userData={userData} />} />
        <Route exact path='/update/:id' element={<Update />} />
        <Route exact path='/details/:id' element={<Details userData={userData} />} />
        <Route exact path='/userprofile/:id' element={<UserProfile userData={userData} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Index