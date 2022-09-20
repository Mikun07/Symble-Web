import React from 'react'
import './Thirdscreen.css';
import TDS from '../../../Assets/SVG/tds.svg';
import Title from '../../Title/Title';
import Input from '../../Input/Input';

function Thirdscreen() {
    return (
        <>
            <div className="thirdscreen-container" id='faq'>
                <div className="thirdscreen-img-section">
                    <img src={TDS} alt="" />
                </div>
                <Title title="Ready to get started?" />
                <h1 className="thirdscreen-txt-1">Share your name and email with us to join our waitlist.</h1>
                <h1 className="thirdscreen-txt-2">You’ll get notified when we are launching!</h1>
                <form>
                    <Input placeholder="Enter your email address" txt="Join our waitlist"/>
                </form>
            </div>
        </>
    )
}

export default Thirdscreen