import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Close from '../../Assets/SVG/close.svg';
import './Sidebar.css';


const toggleClass = ({ isActive }) => isActive ? '' : ''
function Sidebar({ sidebar, close }) {
    return (
        <>
            <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
                <div className="sidebar-header">
                    <h1 className="sidebar-header-txt">
                        Menu
                    </h1>
                    <div className="sidebar-icon">
                        <img src={Close} alt="" onClick={close} />
                    </div>
                </div>
                <div className="nav-link">
                    <HashLink className={toggleClass} to='/#' smooth={true}>Home</HashLink>
                    <HashLink to='/#contact' smooth={true}>Contact Us</HashLink>
                    <HashLink to='/#faqs' smooth={true}>FAQs</HashLink>
                    {/* <div className='sidebar-line' ></div>
                    <HashLink to=''>Sign up</HashLink>
                    <HashLink to=''>Sign in</HashLink> */}
                </div>
                <div className="sidebar-footer">
                    <p className="sidebar-footer-txt">2022. Symble Inc.</p>
                </div>
            </div>
        </>
    )
}

export default Sidebar
