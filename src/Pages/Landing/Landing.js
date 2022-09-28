import React from 'react';
import Header from '../../Components/Header/Header';
import FAQs from '../../Pages/FAQs/FAQs';
import Contact from '../../Pages/Contact/Contact';
import Firstscreen from '../../Components/Screens/First-Screen/Firstscreen';
import Secondscreen from '../../Components/Screens/Second-Screen/Secondscreen';
import Thirdscreen from '../../Components/Screens/Third-Screen/Thirdscreen';
import './Landing.css';

function Landing() {
    return (
        <>
            <Header />
            <Firstscreen />
            <Secondscreen />
            <FAQs />
            <Contact />
            <Thirdscreen />
        </>
    )
}

export default Landing;
