import React from 'react'
import Button from '../Button/Button';
import './Header.css';
import LD from '../../Assets/SVG/ld.svg';

function Header() {
    return (
        <>
            <div className='header-container'>
                <div className="header-title">
                    <div className="header-txt-section">
                        <h2 className='htxt'>Reward good content.</h2>
                        <div className='hr-1'></div>
                        <h2 className='htxt'>Receive as a creator.</h2>
                        <div className='hr-1'></div>
                        <p className='subtext'>Symble is a platform for creators to host live events and earn. Content consumers and fans also get to explore and appreciate content from their faves!</p>
                        <Button Text="Join our Waitlist" className="wht-outline" />
                    </div>
                    <div className="header-img-section">
                        <img src={LD} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header