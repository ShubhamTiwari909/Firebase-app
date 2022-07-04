import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mx-4">

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contacts</h2>
              <nav className="list-none mb-10">
                <li className='my-5'>
                  <a href="mailto:shubhmtiwri00@gmail.com?subject = Feedback&body = Message">Send Email</a>
                </li>
                <li className='my-5'>
                  <p className="text-gray-400 hover:text-white">Phone - +91 9627253516</p>
                </li>
                <li className='my-5'>
                  <a className="text-gray-400 hover:text-white" href="https://wa.me/+91 8266943516" rel="noreferrer" target='_blank'>Whatsapp - +91 8266943516</a>
                </li>
                <li className='my-5'>
                  <a className="text-gray-400 hover:text-white" href='https://www.instagram.com/s_h.u_b.h_a.m_2k99/' rel="noreferrer" target='_blank'>Instagram - s_h.u_b._h.a_m_2k99</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Profile</h2>
              <nav className="list-none mb-10">
                <li className='my-5'>
                  <a className="text-gray-400 hover:text-white" href='https://github.com/ShubhamTiwari909/' rel="noreferrer" target='_blank'>Github</a>
                </li>
                <li className='my-5'>
                  <a className="text-gray-400 hover:text-white" href=' https://www.linkedin.com/in/shubham-tiwari-b7544b193/' rel="noreferrer" target='_blank'>LinkedIn </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Blog</h2>
              <nav className="list-none mb-10">
                <li className='py-5'>
                  <a className="text-gray-400 hover:text-white" href=' https://dev.to/shubhamtiwari909' target='_blank'>Blog Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-400" href='https://www.facebook.com/profile.php?id=100008727573313' rel="noreferrer" target='_blank'>
                <svg fill="currentColor" strokeLinecap="round" strokeline-linejoin="round" strokelinecap-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href='https://www.instagram.com/s_h.u_b.h_a.m_2k99/' rel="noreferrer" target='_blank'>
                <svg fill="currentColor" strokeLinecap="round" strokeline-linejoin="round" strokelinecap-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-400" href=' https://www.linkedin.com/in/shubham-tiwari-b7544b193/' rel="noreferrer" target='_blank'>
                <svg fill="currentColor" strokeLinecap="round" strokeline-linejoin="round" strokelinecap-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path strokeLinecap="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" strokeLinecap="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">Copyrights©2022 E-Quotes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;