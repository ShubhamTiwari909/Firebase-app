import React from 'react'
import Logo from './image/Logo.png'
import GoogleButton from './GoogleAuth'
import './Navbar.css'
function Navbar(props) {
  return (
    <div className="flex">
      <nav className="
          relative
          w-full
          flex flex-wrap
          items-center
          justify-between
          py-4
          bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900
          text-gray-100
          hover:text-gray-200
          focus:text-gray-300
          shadow-lg
          navbar navbar-expand-lg navbar-light
          ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button className="
            navbar-toggler
            text-gray-100
            border-0
            hover:shadow-none hover:no-underline
            py-2
            px-2.5
            bg-transparent
            focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
          " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
              className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
              </path>
            </svg>
          </button>
          <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">


            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:my-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:my-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0" href="#donation">
                  Donate
                </a>
              </li>
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:my-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:my-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:my-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0 my-7" href="#benefits">
                  Readings
                </a>
              </li>
              <li className="nav-item pr-2 md:pr-0 sm:my-0 my-5 md:mx-8">
                <a className="nav-link text-slate-200 sm:ml-8 text-xl sm:my-0 my-7" href='#google'>
                  <GoogleButton />
                </a>       
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="flex px-5 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900">
        <img src={Logo} alt="logo"
          className="Logo" />
      </div>
    </div>
  )
}

export default Navbar