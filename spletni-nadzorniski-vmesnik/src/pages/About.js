import React from 'react';
import '../css/general-info.css';
import '../css/about.css';
import secondaryLogo from '../res/secondary-logo.png';
import AmarIbrahimovicPhoto from '../res/avatar1.png';
import JovanTrajkovicPhoto from '../res/avatar2.png';
import MarkoKurnikPhoto from '../res/avatar3.png';
import MilanMomčilovicPhoto from '../res/avatar4.png';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css'; // font-awesome ikone

const About = () => {
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
            <div className='aboutTitle'>About Us</div>
            <div className='aboutContent'>
                <div className='aboutPerson'>
                    <div className='aboutPersonPhoto'>
                        <img src={AmarIbrahimovicPhoto} alt="Amar Ibrahimović" />
                    </div>
                    <div className='aboutPersonContent'>
                        <h1>Amar Ibrahimović</h1>
                        <h2>CEO</h2>
                        <p>Main interests: JavaScript, Node.js, Python, C++</p>
                        <i class="fa fa-envelope"></i> amaribrahimovic@iprotect.com <br />
                    </div>
                </div>
                <div className='aboutPerson'>
                    <div className='aboutPersonPhoto'>
                        <img src={JovanTrajkovicPhoto} alt="Jovan Trajović" />
                    </div>
                    <div className='aboutPersonContent'>
                        <h1>Jovan Trajović</h1>
                        <h2>COO</h2>
                        <p>Main interests: C, C++, SQL, Data-Bases</p>
                        <i class="fa fa-envelope"></i> jovantrajkovic@iprotect.com <br />
                    </div>
                </div>
                <div className='aboutPerson'>
                    <div className='aboutPersonPhoto'>
                        <img src={MarkoKurnikPhoto} alt="Marko Kurnik" />
                    </div>
                    <div className='aboutPersonContent'>
                        <h1>Marko Kurnik</h1>
                        <h2>CTO</h2>
                        <p>Main interests: HTML, CSS, PHP, C++, Zero-trust</p>
                        <i class="fa fa-envelope"></i> markokurnik@iprotect.com <br />
                    </div>
                </div>
                <div className='aboutPerson'>
                    <div className='aboutPersonPhoto'>
                        <img src={MilanMomčilovicPhoto} alt="Milan Momčilović" />
                    </div>
                    <div className='aboutPersonContent'>
                        <h1>Milan Momčilović</h1>
                        <h2>CSO</h2>
                        <p>Main interests: C, C++, JavaScript, Blockchain, Penetration Testing</p>
                        <i class="fa fa-envelope"></i> milanmomcilovic@iprotect.com <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About