import React from 'react'
import './Secondscreen.css';
import PD1 from '../../../Assets/SVG/pd1.svg';
import PD2 from '../../../Assets/SVG/pd2.svg';
import PD3 from '../../../Assets/SVG/pd3.svg';

function Secondscreen() {
    return (
        <>
            <div className="secondscreen-container">
                <div className="green-bck">
                    <div className='phone'>
                        <img src={PD1} alt="" />
                        <img src={PD2} alt="" />
                        <img src={PD3} alt="" />
                    </div>
                </div>
                <div className="bttm">
                    <h4 className='secondscreen-txt'>
                        Get started in 3 easy steps
                    </h4>
                    <div className="sub-bottom">
                        <div className="info-sec">
                            <h1 className='blu-txt'>1</h1>
                            <p className='gry-txt'>Download the symble app from App store or Google store and sign up.</p>
                        </div>
                        <div className='line'></div>
                        <div className="info-sec">
                            <h1 className='blu-txt'>2</h1>
                            <p className='gry-txt'>Select your preferred event categories.</p>
                        </div>
                        <div className='line'></div>
                        <div className="info-sec">
                            <h1 className='blu-txt'>3</h1>
                            <p className='gry-txt'>Start creating and exploring events!</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <h4 className='bottom-txt'>
                        Available categories
                    </h4>
                    <div className="gry-bck">
                        <div className="txt">
                            <p className='blu'>Concerts</p>
                            <p className='blu'>Auctions</p>
                            <p className='blu'>Podcasts</p>
                            <p className='blu'>Charity</p>
                            <p className='blu'>Live commerce</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secondscreen