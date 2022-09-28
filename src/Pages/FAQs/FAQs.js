import React from 'react'
import './FAQs.css'
import Button from '../../Components/Button/Button';
import Dropdown from '../../Components/Dropdown/Dropdown';

function FAQs() {
    return (
        <>
            <div className="faqs-container" id="faqs">
                {/* <div className="faqs-header">
                    <h1 className="faqs-txt">
                        Frequently Asked Questions (FAQs)
                        <hr className="faqs-line" />
                    </h1>
                </div> */}
                <div className="faqs-body">
                    <Dropdown text='What is Symble all about?' subtext='Symble is a platform for creators to host live events and earn. Creators can create live events in various categorires such as concerts, parties, live commerce, podcasts and so on. They earn either by making the event paid (subscription) or receiving monetary gifts during the event.' />
                    <Dropdown text='What does live commerce mean?' subtext='Live commerce on Symble means you get to display your products or goods during your live event, and your customers/viewers get to immediately place orders and questions during the live. We believe it is far more advantageous to see the products or goods properly before purchasing over the internet.' />
                    <Dropdown text='Do I need to have an account to watch live videos?' subtext='Yes, you do need to have an account to use the app. This enables you to enjoy the full experience.' />
                    <h1 className="faqs-body-txt">
                        Not satisfied?
                    </h1>
                    <div>
                        <p className="faqs-subtxt">
                            Do you still have some questions for us? or do you have a review or feedback?
                        </p>
                        <p className="faqs-subtxt">
                            Reach out to us! We would be thrilled to hear from you.
                        </p>
                    </div>
                    <Button to="/contact" Text="Contact Us" className="blu-bck" />
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default FAQs