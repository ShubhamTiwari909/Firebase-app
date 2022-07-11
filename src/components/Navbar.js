import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

function Navbar({ googleSignin, quoteCategory, setQuoteCategory, signUpWithGoogle, signOutWithGoogle, userData }) {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900">
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
                            <li className="">
                                <div className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/home">
                                        <form>
                                            <select name="category" value={quoteCategory} onChange={(e) => setQuoteCategory(e.target.value)}
                                                className="rounded-md mx-1 text-slate-800 p-0.5">
                                                <option value="Category(All)" onClick={() => setNavbarOpen(!navbarOpen)}>Category(All)</option>
                                                <option value="Alone" onClick={() => setNavbarOpen(!navbarOpen)}>Alone</option>
                                                <option value="Attitude" onClick={() => setNavbarOpen(!navbarOpen)}>Attitude</option>
                                                <option value="Friendship" onClick={() => setNavbarOpen(!navbarOpen)}>Friendship</option>
                                                <option value="Happiness" onClick={() => setNavbarOpen(!navbarOpen)}>Happiness</option>
                                                <option value="Inspiratational" onClick={() => setNavbarOpen(!navbarOpen)}>Inspiratational</option>
                                                <option value="Leadership" onClick={() => setNavbarOpen(!navbarOpen)}>Leadership</option>
                                                <option value="Life" onClick={() => setNavbarOpen(!navbarOpen)}>Life</option>
                                                <option value="Love" onClick={() => setNavbarOpen(!navbarOpen)}>Love</option>
                                                <option value="Men" onClick={() => setNavbarOpen(!navbarOpen)}>Men</option>
                                                <option value="Motivational" onClick={() => setNavbarOpen(!navbarOpen)}>Motivational</option>
                                                <option value="Positive" onClick={() => setNavbarOpen(!navbarOpen)}>Positive</option>
                                                <option value="Reading" onClick={() => setNavbarOpen(!navbarOpen)}>Reading</option>
                                                <option value="Strength" onClick={() => setNavbarOpen(!navbarOpen)}>Strength</option>
                                                <option value="Success" onClick={() => setNavbarOpen(!navbarOpen)}>Success</option>
                                                <option value="Time" onClick={() => setNavbarOpen(!navbarOpen)}>Time</option>
                                                <option value="Wisdom" onClick={() => setNavbarOpen(!navbarOpen)}>Wisdom</option>
                                                <option value="Women" onClick={() => setNavbarOpen(!navbarOpen)}>Women</option>
                                            </select>
                                        </form>
                                    </NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <p className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}>
                                    <NavLink to="/profile" onClick={() => setNavbarOpen(!navbarOpen)}>Profile</NavLink>
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className={`${googleSignin ? 'block' : 'hidden'} mt-2 px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75`}
                                >
                                    <NavLink to="/add" onClick={() => setNavbarOpen(!navbarOpen)}>Add</NavLink>
                                </p>
                            </li>
                            <li className="nav-item">
                                <p className="px-3 py-2.5 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    onClick={() => setNavbarOpen(!navbarOpen)}>
                                    <button className={`${userData === null
                                        ?
                                        'bg-slate-100 border-indigo-400 text-slate-800'
                                        :
                                        'bg-rose-500 border-red-300 text-slate-100'
                                    } flex space-x-2  px-3 py-2 rounded-md  border-2 `} onClick={userData === null ? signUpWithGoogle : signOutWithGoogle}>
                                        <FcGoogle size="1rem" />
                                        <p> {userData === null ? "Sign in" : "Signout"}</p>
                                    </button>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar