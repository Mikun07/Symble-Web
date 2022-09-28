import React from 'react';
import './Firstscreen.css';
import Card from '../../Card/Card';
import Title from '../../Title/Title';
import FSD1 from '../../../Assets/SVG/fsd1.svg';
import FSD2 from '../../../Assets/SVG/fsd2.svg';
import FSD3 from '../../../Assets/SVG/fsd3.svg';
import Rscard from '../../Card/Rscard';

function Firstscreen() {
    return (
        <>
            <div className="firstscreen-container">
                <Title title="What we’re offering" />
                <Card Number="1." Title="Share your live event and receive money in real time!" Subtxt="This means you can share your party or any free event and get monetary gifts right there on the Symble app!" Pic={FSD1} />
                <Rscard Number="2." Title="Buy and sell products in real time!" Subtxt="Through live commerce, vendors can showcase their products more and get them sold to buyers in real time!" Pic={FSD2} />
                <Card Number="3." Title="Get paid for your live content through subscriptions!" Subtxt="Create paid events and earn from it by getting subscribers through the app!" Pic={FSD3} />
            </div>
        </>
    )
}

export default Firstscreen