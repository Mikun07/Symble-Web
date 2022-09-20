import React from 'react';
import Header from '../../Components/Header/Header';
import Firstscreen from '../../Components/Screens/First-Screen/Firstscreen';
import Secondscreen from '../../Components/Screens/Second-Screen/Secondscreen';
import Thirdscreen from '../../Components/Screens/Third-Screen/Thirdscreen';
import Footer from '../../Components/Footer/Footer';
import './Landing.css';

function Landing() {
    return (
        <>
            <Header />
            <Firstscreen />
            <Secondscreen />
            <Thirdscreen />
            <Footer />
        </>
    )
}

export default Landing;
