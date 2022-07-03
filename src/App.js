import { useState } from 'react'
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Landing from './components/Landing'
import Add from './components/Add'
import Update from './components/Update';
import Profile from './components/Profile'
import Home from './components/Home';
import Details from './components/Details';
import UserProfile from './components/UserProfile';
import "tailwindcss/tailwind.css"
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'

function App() {
  const [googleSignin, setGoogleSignin] = useState(false)
  const [userId, setUserid] = useState("")
  const auth = getAuth()
  const googleAuthProvider = new GoogleAuthProvider()
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navigation = useNavigate()
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(result => {
        if (result !== []) {
          setGoogleSignin(true)
          navigation('/home')
          setUserid(result.user.uid)
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

  return (
    <div>
      <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="grid grid-cols-2 place-items-center lg:text-xl font-bold leading-relaxed mr-4 py-2 whitespace-nowrap text-white"
            >
              E-Quotes
            </div>
            <button
              className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-slate-100 block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              ⬇⬇⬇
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col -mx-4 lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <p className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                  <NavLink to="/home" onClick={() => setNavbarOpen(!navbarOpen)}>Home</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                  <NavLink to="/profile" onClick={() => setNavbarOpen(!navbarOpen)}>Profile</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                >
                  <NavLink to="/add" onClick={() => setNavbarOpen(!navbarOpen)}>Add</NavLink>
                </p>
              </li>
              <li className="nav-item">
                <p className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => setNavbarOpen(!navbarOpen)}>
                  <button className={`${googleSignin ? 'hidden' : 'block'} flex space-x-2 bg-slate-100 px-3 py-2 rounded-md 
                  text-slate-800 border-2 border-indigo-400`}
                    onClick={signUpWithGoogle}>
                    <FcGoogle size="1rem" />
                    <p>Sign in with Google</p>
                  </button>
                  <button className={`${googleSignin ? 'block' : 'hidden'} flex space-x-2 bg-rose-500 px-3 py-2 rounded-md 
                  text-slate-100 border-2 border-red-300`} onClick={signOutWithGoogle}>
                    <FcGoogle size="1rem" />
                    <p>Sign out</p>
                  </button>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <ToastContainer className="w-2/3 lg:w-1/5" />
      </div>
      <Routes>
        <Route exact path='/' element={<Landing signUpWithGoogle={signUpWithGoogle} />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/profile' element={<Profile userId={userId} />} />
        <Route exact path='/add' element={<Add userId={userId} />} />
        <Route exact path='/update/:id' element={<Update />} />
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/userprofile/:id' element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;