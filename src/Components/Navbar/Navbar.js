import React from 'react';
import './Navbar.css';
import { NavLink } from "react-router-dom";
import Symble from '../../Assets/PNG/symble.png';

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Symble} alt="" />
            <p className="navbar-txt">
              Sybmle
            </p>
          </div>
          <div className="navbar-link">
            <ul className="navbar-items">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/faqs">FAQs</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;