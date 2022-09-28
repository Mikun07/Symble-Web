import { useState } from 'react'
import './Contact.css';
import AD from '../../Assets/PNG/ad.png';
import Label from '../../Components/Label/Label';
import Button from '../../Components/Button/Button';
import Textarea from '../../Components/Label/Textarea';

function Contact() {
    const [showMessage, setShowMessage] = useState(false);
    const toggle = function () {
        alert('test')
        setShowMessage(true)
    }
    return (
        <>
            <div className="contact-container" id="contact">
                {/* <div className="contact-header">
                    <div className="contact-header-sub">
                        <h1 className="contact-txt">
                            Contact us
                        </h1>
                        <hr className="contact-line" />
                    </div>
                </div> */}
                <div className="contact-body">
                    <div className="contact-txt-section">
                        <div className="contact-form">
                            {
                                showMessage
                                &&
                                <div className="contact-pop">
                                    <p className="contact-pop-txt">Thanks for reaching out!</p>
                                    <p className="contact-pop-gry">We will get back to you as soon as we can. </p>
                                    <hr className="pop-line" />
                                    <p className="contact-pop-txt">Submit another comment</p>
                                </div>
                            }
                            <Label Txt="Email" type="email" />
                            <Label Txt="Full name" type="text" />
                            <Textarea Txt="Questions/concerns" />
                            <div className=' '>
                                <Button Text="Contact us" className="blu-bck" />
                            </div>
                        </div>
                    </div>
                    <div className="contact-img-section">
                        <img src={AD} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
