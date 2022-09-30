import React from 'react';
import './Navbar.css';
import Menu from '../../Assets/SVG/menu.svg';
import { HashLink as Link } from 'react-router-hash-link';
import Symble from '../../Assets/PNG/symble.png';

function Navbar({ openSidebar }) {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Symble} alt="" />
            <Link smooth to="#">
              <p className='navbar-txt'>
                Symble
              </p>
            </Link>
          </div>
          <div className="navbar-link">
            <ul className="navbar-items">
              <Link smooth to="#faqs">FAQs</Link>
              <Link smooth to="#contact">Contact Us</Link>
            </ul>
          </div>
          <div className='navbar-icon'>
            <img src={Menu} alt="" onClick={openSidebar} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;