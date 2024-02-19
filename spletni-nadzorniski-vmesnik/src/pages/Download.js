import React from 'react';
import '../css/general-info.css';
import '../css/download.css';
import secondaryLogo from '../res/secondary-logo.png';
import appstoreIcon from '../res/appstore.png';
import googleplayIcon from '../res/googleplay.png';
import { Link } from 'react-router-dom';

const Download = () => {
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
            <div className='contentDownload'>
                <div className='downloadIos'>
                    <div className="imagesContainer">
                        <p><a href="https://www.apple.com/app-store/" target="_blank"><img src={appstoreIcon} alt="App Store" /></a></p>
                    </div>
                </div>
                <div className='downloadAndroid'>
                    <div className="imagesContainer">
                        <p><a href="https://play.google.com/" target="_blank"><img src={googleplayIcon} alt="Google Play" /></a></p>
                    </div>
                    <p className='downloadLinkTitle'>No Google play?</p>
                    <p class="downloadLink"><a href="https://your-android-apk-link" target="_blank">Download Android .apk (version 1.0)</a></p>
                    <p class="downloadLink"><a href="https://your-wearos-apk-link" target="_blank">Download WearOS .apk (version 1.0)</a></p>
                </div>
            </div>
        </div>
    )
}

export default Download