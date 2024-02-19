import React from 'react';
import '../css/general-info.css';
import '../css/pricing.css';
import secondaryLogo from '../res/secondary-logo.png';
import { Link } from 'react-router-dom';

const Pricing = () => {
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
            <div className='pricingTitle'>Pricing</div>
            <div className='pricingContent'>
                <div className='pricingRow'>
                    <div className='priceOption priceOptionUniversal'>
                        <h1>1€</h1>
                        <p>per device</p>
                        <p>per month</p>
                    </div>
                    <div className='priceOption'>
                        <h1>10€</h1>
                        <p>one device</p>
                        <p>one year</p>
                    </div>
                    <div className='priceOption'>
                        <h1>20€</h1>
                        <p>two devices</p>
                        <p>one year</p>
                    </div>
                </div>
                <div className='pricingRow'>
                    <div className='priceOption'>
                        <h1>30€</h1>
                        <p>three devices</p>
                        <p>one year</p>
                    </div>
                    <div className='priceOption'>
                        <h1>50€</h1>
                        <p>five devices</p>
                        <p>one year</p>
                    </div>
                    <div className='priceOption'>
                        <h1>100€</h1>
                        <p>ten devices</p>
                        <p>one year</p>
                    </div>
                </div>
                <div className='pricingRow'>
                    <div className='priceOption'>
                        <h2>Other?</h2>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing