import React from 'react';
import '../css/general-info.css';
import '../css/contact.css';
import secondaryLogo from '../res/secondary-logo.png';
import primaryLogo from '../res/primary-logo.png';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // font-awesome ikone

const Contact = () => {
    return (
        <div>
            <div className='bannerInfo'>
                <Link to="/home"><img src={secondaryLogo} alt="Logo" className="logoInfo" /></Link>
                <div className='bannerPromoText'>Protection for you and the people you love</div>
                <div className='bannerLinks'>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/download">Download</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <div className='contactTitle'>Contact Us</div>
            <div id="contact" class="contactContent">
                <div class="contact-container">
                    <div class="contact-image">
                        <img src={primaryLogo} alt="Logo"/>
                    </div>
                    <div class="contact-data">
                        <i class="fa fa-map-marker"></i> Koroška cesta 46, 2000 Maribor <br />
                        <i class="fa fa-phone"></i> +386 2 220 70 00 <br />
                        <i class="fa fa-envelope"></i> info@iprotect.com <br />
                    </div>
                    <div class="contact-form">
                        <p>Send us a message</p>
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="text" name="message" placeholder="Message" required />
                        <div class="submit-container">
                            <button type="submit">
                                <i class="fa fa-paper-plane"></i>Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact