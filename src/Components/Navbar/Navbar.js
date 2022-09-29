import React from 'react';
import './Navbar.css';
import Menu from '../../Assets/SVG/menu.svg';
import { HashLink } from 'react-router-hash-link';
import Symble from '../../Assets/PNG/symble.png';

function Navbar({ openSidebar }) {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Symble} alt="" />
            <HashLink to="/#" smooth={true}>
              <p className='navbar-txt'>
                Symble
              </p>
            </HashLink>
          </div>
          <div className="navbar-link">
            <ul className="navbar-items">
              <HashLink to="/#faqs" smooth={true}>FAQs</HashLink>
              <HashLink to="/#contact" smooth={true}>Contact Us</HashLink>
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