import React from 'react';
import '../css/general-info.css';
import '../css/home.css';
import secondaryLogo from '../res/secondary-logo.png';
import locationIcon from '../res/location.png';
import mapIcon from '../res/map.png';
import childSafetyIcon from '../res/child-safety.png';
import geofenceIcon from '../res/geofence.png';
import alertIcon from '../res/alert.png';
import youtubePlaceholder from '../res/youtube.png';
import appstoreIcon from '../res/appstore.png';
import googleplayIcon from '../res/googleplay.png';
import { Link } from 'react-router-dom';

const Home = () => {
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
			<div className='contentHomeTitle'>IPROTECT personal and group security</div>
			<div className='contentHome'>
				<div className='features'>
					<p className='featuresTitle'>Main features</p>
					<div className='featuresItems'>
						<img src={locationIcon} alt="Location" />
						<p>Locate users</p>
					</div>
					<div className='featuresItems'>
						<img src={mapIcon} alt="Map" />
						<p>Map view</p>
					</div>
					<div className='featuresItems'>
						<img src={childSafetyIcon} alt="ChildSafety" />
						<p>Child Safety</p>
					</div>
					<div className='featuresItems'>
						<img src={geofenceIcon} alt="Geofence" />
						<p>Geofences</p>
					</div>
					<div className='featuresItems'>
						<img src={alertIcon} alt="Alert" />
						<p>Automatic Alerts</p>
					</div>
					<div className='learnmore'>
						<Link to="/about">Learn more</Link>
					</div>
				</div>
				<div className='registerButton'>
					<Link to="/register">Register now</Link>
				</div>
				<div className='rightPane'>
					<div className='promotionBanner'>
						<p><a href="https://www.youtube.com/"><img src={youtubePlaceholder} alt="Youtube" /></a></p>
					</div>
					<div className='mobileStoreLinks'>
						<p><a href="https://play.google.com/" target="_blank"><img src={googleplayIcon} alt="Google Play" /></a></p>
						<p><a href="https://www.apple.com/app-store/" target="_blank"><img src={appstoreIcon} alt="App Store" /></a></p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Home