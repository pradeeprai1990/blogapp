// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faHomeLg } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className=" relative shadow-lg px-3 py-2">
    <nav className="flex justify-between">
      <div className="w-[130px] md:w-[200px] flex items-center">
        <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
      </div>
      <div className="flex items-center gap-3">
        <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link to={'/'}>Home</Link></li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><Link to={'/about-us'}>About Us</Link></li>
            <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"> 
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <FontAwesomeIcon icon="fa-regular fa-eye" />
            </li>
          </ul>
        </div>
       
      </div>
    </nav>
  </header>
  )
}
