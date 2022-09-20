import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="pale-line"></div>
        <div className="footer-container">
          <p className="footer-logo">Symble</p>
          <p className='footer-cpyrt-text'>Copyright 2022 Symble Inc. All rights reserved.</p>
            <NavLink className='footer-txt' to='/contact'> Contact Us </NavLink>
        </div>
      </div>
    </>
  )
}

export default Footer
