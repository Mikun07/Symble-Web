import React from 'react'
import './Thirdscreen.css';
import TDS from '../../../Assets/SVG/tds.svg';
import TDS1 from '../../../Assets/SVG/tds1.svg';
import Title from '../../Title/Title';
import Input from '../../Input/Input';

function Thirdscreen() {
    return (
        <>
            <div className="thirdscreen-container">
                <div className="thirdscreen-img-section-1">
                    <img src={TDS} alt="" />
                </div>
                <div className="thirdscreen-img-section-2">
                    <img src={TDS1} alt="" />
                </div>
                <Title title="Ready to get started?" />
                <h1 className="thirdscreen-txt">Share your name and email with us to join our waitlist. You’ll get notified when we are launching!</h1>
                <form>
                    <Input placeholder="Enter your email address" txt="Join our waitlist"/>
                </form>
            </div>
        </>
    )
}

export default Thirdscreen