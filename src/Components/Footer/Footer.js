import React from 'react';
import './Footer.css';
import { HashLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="pale-line"></div>
      <div className="footer-container">
        <p className="footer-logo">Symble</p>
        <p className='footer-cpyrt-text'>Copyright 2022 Symble Inc. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
