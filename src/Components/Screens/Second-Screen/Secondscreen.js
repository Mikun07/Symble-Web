import React from 'react'
import './Secondscreen.css';
import PD1 from '../../../Assets/SVG/pd1.svg';
import PD2 from '../../../Assets/SVG/pd2.svg';
import PD3 from '../../../Assets/SVG/pd3.svg';
import IPD1 from '../../../Assets/SVG/ipd1.svg';
import IPD2 from '../../../Assets/SVG/ipd2.svg';
import IPD3 from '../../../Assets/SVG/ipd3.svg';
import Concert from '../../../Assets/SVG/concert.svg';
import Live from '../../../Assets/SVG/live.svg';
import Parties from '../../../Assets/SVG/parties.svg';
import Podcast from '../../../Assets/SVG/podcast.svg';

function Secondscreen() {
    return (
        <>
            <div className="secondscreen-container">
                <div className="Lblu-bck">
                    <div className="phone-section-1">
                        <img src={PD1} alt="" />
                        <img src={PD2} alt="" />
                        <img src={PD3} alt="" />
                    </div>
                </div>
                <div className="box">
                    <div className="display">
                        <div className="phone-section-2">
                            <img src={IPD1} alt="" />
                            <img src={IPD2} alt="" />
                            <img src={IPD3} alt="" />
                        </div>
                        <div className="txt-section">
                            <h1 className="sec-header">
                                Get started in 3 easy steps
                            </h1>
                            <div className="sec-bottom">
                                <div className="sec-bottom-txt">
                                    <p className='sec-number'>1</p>
                                    <p className="sec-txt">Join our waitlist, Be one of the first.</p>
                                </div>
                                <hr className='sec-line' />
                                <div className="sec-bottom-txt">
                                    <p className='sec-number'>2</p>
                                    <p className="sec-txt">Select your preferred event categories.</p>
                                </div>
                                <hr className='sec-line' />
                                <div className="sec-bottom-txt">
                                    <p className='sec-number'>3</p>
                                    <p className="sec-txt">Start creating and exploring events!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-section">
                    <h1 className="bottom-header">
                        Available categories
                    </h1>
                    <div className="pale-bck">
                        <div className="hmove">
                            <div className="hslide">
                                <img src={Concert} alt="" />
                                <p className="h-txt">Concert</p>
                            </div>
                            <div className="hslide">
                                <img src={Live} alt="" />
                                <p className="h-txt">Live Commerce</p>
                            </div>
                            <div className="hslide">
                                <img src={Parties} alt="" />
                                <p className="h-txt">Parties</p>
                            </div>
                            <div className="hslide">
                                <img src={Podcast} alt="" />
                                <p className="h-txt">Podcast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secondscreen