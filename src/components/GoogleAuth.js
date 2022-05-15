import React, { useState } from 'react'
import { signInWithGoogle } from './Firebase'
import { FcGoogle } from "react-icons/fc"

function GoogleAuth() {
    const [Message, setMessage] = useState("");
    const [signinText, setSigninText] = useState("Sign in");

    const SignInMessage = () => {

        setTimeout(() => {
            setMessage("")
        }, 1500);
        if (signinText === "Sign in") {
            setMessage("Signing in...")
        }
        else {
            setMessage("Signing out...")
        }

        setTimeout(() => {
            if (signinText === "Sign in") {
                setMessage("Signed in with Google")
            }
            else{
                setMessage("Signed out with Google")
            }
        }, 2500);

        setTimeout(() => {
            setMessage("")
            if (signinText === "Sign in") {
                setSigninText("Sign out")
            }
            else {
                setSigninText("Sign in")
            }
        }, 3500);

    }

    return (
        <div>
            <button onClick={() => { signInWithGoogle(); SignInMessage(); }}
                className="shadow-xl shadow-red-800/50 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-400 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                <span className="flex relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {signinText} <FcGoogle size="1.2rem" style={{ margin: "0 6px" }} />
                </span>
            </button>
            <h1>{Message}</h1>
        </div>
    )
}

export default GoogleAuth