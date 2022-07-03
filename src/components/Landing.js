import './Landing.css'
import { FcGoogle } from 'react-icons/fc'

function Landing({ signUpWithGoogle }) {
  return (
    <div className="LandingPage grid place-content-center">
        <div className="px-5 py-2 bg-slate-800 border-2 border-indigo-400 rounded-tr-md rounded-bl-md mx-5">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-400 font-bold text-center text-lg md:text-2xl">
            Welcome to E-Quotes App Your personal Quotes Saving and Reading App</h1>
        </div>
        <button className="flex justify-content-center space-x-2 bg-slate-100 px-3 py-2 my-3 mx-12 rounded-md 
                  text-slate-800 border-2 border-indigo-400" onClick={signUpWithGoogle}>
          <p>Get Started </p>
          <FcGoogle size="1.5rem" />
        </button>
    </div>
  )
}

export default Landing