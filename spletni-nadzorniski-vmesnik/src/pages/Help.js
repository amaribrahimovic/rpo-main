import React from 'react';
import '../css/general-info.css';
import '../css/help.css';
import secondaryLogo from '../res/secondary-logo.png';
import { Link } from 'react-router-dom';

const Help = () => {
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
            <div className='helpTitle'>Help</div>
            <div className='helpContent'>
                <div className='helpItem'>
                    <h1>What is IPROTECT?</h1>
                    <p>IPROTECT is security app for you and the people you love. The main focus of our service is providing functionalities based on location of users, so will never worry about your loved ones ever again.</p>
                </div>
                <div className='helpItem'>
                    <h1>Is IPROTECT secure?</h1>
                    <p>IPROTECT is secure. We are following all necessary legal regulations and security best practices. All your data is encrypted in transfer and when saved on our servers. No passwords are saved in plain-text format. We have obtained external security review by TheBestReviewFirmEver to confirm, test and improve our security protocols.</p>
                </div>
                <div className='helpItem'>
                    <h1>Lost device. What now?</h1>
                    <p>You can control your devices from IPROTECT Dashboard. Simply remove the device by going to Devices. All IPROTECT app data will be deleted from phone.</p>
                </div>
                <div className='helpItem'>
                    <h1>What devices are supported?</h1>
                    <p>Android in iOS platforms are both supported. Apps for WearOS and AppleWatch are not available at this point.</p>
                </div>
                <div className='helpItem'>
                    <h1>How to install IPROTECT app?</h1>
                    <p>Android: The easiest way is to install throught Google Play Store. Alternatively, you can download .apk files from our Download portal.</p>
                    <p>iOS: Download and install is through Apple App Store.</p>
                </div>
                <div className='helpItem'>
                    <h1>How to uninstall IPROTECT app?</h1>
                    <p>Android: First remove IPROTECT from Device Admin Apps. This step is device dependent. For Samsung: Settings --{'>'} Security and Privacy --{'>'} More security settings --{'>'} Device admin apps. Remove from there. After that, remove as normal.</p>
                    <p>iOS: Tap and hold on the IPROTECT icon on the home page until the icon starts to wiggle. Click on the “x” icon in the upper left of IPROTECT. Delete app from your iOS device. Remove MDM (Mobile Device Management) from the device. Go to Setting --{'>'} General --{'>'} Device Management --{'>'} FamiSafe --{'>'} Remove Management</p>
                </div>
                <div className='helpItem'>
                    <h1>Where can I view my people.</h1>
                    <p>Everything is avaialbe in User Dashboard. There is multiple view options: Device list, User list and most notably, Map view.</p>
                </div>
                <div className='helpItem'>
                    <h1>Antivirus flagging as dangerous</h1>
                    <p>If you installed IPROTECT from this website or from Google Play, there is no virus. It's a false positive and you should contact your antivirus customer support; hopefully they will fix the problem.</p>
                </div>
                <div className='helpItem'>
                    <h1>What if I do not like this product?</h1>
                    <p>We offer 7-days no-questions-asked refund on all purchases. After that you can cancel you subscription upon next renewal. Mid-term cancellations are not supported.</p>
                </div>
                <div className='helpItem'>
                    <h1>What are payment options?</h1>
                    <p>We support most popular payment options: PayPal, Apple Pay, Google Pay. You can also enter credit card data directly. Your payment information in securely stored on our servers. We only use this data to process payments. Financial data is never shared with anyone.</p>
                </div>
                <div className='helpItemContact'>
                    <h1>Still have questions?</h1>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Help