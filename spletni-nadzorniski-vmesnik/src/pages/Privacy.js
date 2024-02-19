import React from 'react';
import '../css/general-info.css';
import '../css/privacy.css';
import secondaryLogo from '../res/secondary-logo.png';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
            <div className='privacyTitle'>Privacy Policy</div>
            <div className='privacyContent'>
                <p>IPROTECT ("We", "Our") values the privacy of our customers, users, and others who use our mobile device software applications, websites, services, and content owned or operated by IPROTECT Security Group (the "IPROTECT Services"). The following Privacy Policy governs the IPROTECT Services.</p>
                <h1>Legal</h1>
                <p>We are following all necessary European and Slovenian law requirements</p>
                <ol>
                    <li>General Data Protection Regulation (EU GDPR)</li>
                    <li>Zakon o Varstvu Osebnih Podatkov (ZVOP-2)</li>
                    <li>Zakon o Elektronskih Komunikacijah (ZEKom-2)</li>
                    <li>All data is collected and processed as OPT-IN. Necessary opt-in (location information, name, email address etc.) included.</li>
                </ol>
                <h1>General Information</h1>
                <p>This Privacy Policy details important information regarding the use and disclosure of User information collected through the IPROTECT Services. IPROTECT provides this Privacy Notice to help you make an informed decision about whether to use or continue using the IPROTECT Services.</p>
                <p>This Privacy Notice is incorporated into and is subject to the IPROTECT Terms of Service. Your use of the IPROTECT Services and any personal information you provide on the IPROTECT Services remains subject to the terms of this Privacy Notice and the Terms of Service.</p>
                <h1>Important Disclosures and Consents</h1>
                <p>IPROTECT Services require the use of internet data. Standard data and messaging charges, fees, and taxes from your wireless operator apply.</p>
                <p>To provide the IPROTECT Services, we collect, maintain, use, and display your personal data and the geographic location of your mobile devices.</p>
                <p>In order to subscribe to the IPROTECT Services, you must consent to: (a) the use of your devices' location to provide the IPROTECT Services to you, including the display and disclosure of your location information and (b) pay operator data, messaging, and other fees resulting from IPROTECT Services usage.</p>
                <p>If we detect violation of usage rules, we hold the right to suspend your account and if necessary hand all the information to legal authorities.</p>
                <h1>The Information IPROTECT collects</h1>
                <p>REGISTRATION INFORMATION: You provide to IPROTECT certain personally-identifiable information (such as device ID number, your username, email address) when choosing to subscribe to the IPROTECT Services.</p>
                <p>LOCATION INFORMATION: To provide the IPROTECT Services, we derive location information from your wireless operator, certain third-party service providers, or directly from the mobile device that you used to register with the IPROTECT Services. This location tracking of your mobile device may occur even when the IPROTECT Services mobile application is not actively open and running, but your location is being securely transmitted and logged in accordance with your privacy and opt-in settings.</p>
                <p>OTHER DEVICE INFORMATION: To provide the IPROTECT Services, we receive other information from the device (such as, call logs, battery information, etc.). This occurs only in response to a specific request from the user, and the data is retained only for as long as needed to provide the services.</p>
                <p>COOKIES, PERSISTENT FILE INFORMATION: When you use the IPROTECT Services, we may send one or more cookies (small text files containing a string of alphanumeric characters) to your computer. IPROTECT may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your web browser and may be used by us during your subsequent visits to the IPROTECT Web site. Persistent cookies set by the IPROTECT Web site can be removed.</p>
                <p>LOG FILE INFORMATION: When you use the IPROTECT Services, our servers automatically record certain information about your usage from your mobile device and web browser. These server securely logs may include information such as a mobile device identification number and device identifier, web requests, Internet Protocol ("IP") address, browser type, browser language, referring / exit pages and URLs, platform type, number of clicks, domain names, landing pages, pages viewed and the order of those pages, features used in the IPROTECT mobile application, the amount of time spent on particular web pages, the dates and times of your requests, and one or more cookies that may uniquely identify your browser.</p>
                <h1>How we use collected information</h1>
                <p>IPROTECT uses your personally identifiable, registration, and location information to operate, maintain, and provide to you and other Users all of the features and functionality of the IPROTECT Service.</p>
                <p>IPROTECT uses your personally identifiable, location, and certain non-personally-identifiable information (such as anonymous log file information) to track and analyze User preferences and trends in order to improve the quality and design of the IPROTECT Services and to create new features, promotions, functionality, and services.</p>
                <p>IPROTECT uses cookies and log file information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the IPROTECT Services; (b) provide custom and personalized content, advertisements, and information; (c) monitor the effectiveness of our marketing campaigns; and (d) monitor aggregate usage metrics.</p>
                <p>IPROTECT uses your email address from time-to-time for non-marketing or administrative purposes such as sending privacy or security related notices, notifying you of major IPROTECT changes, or for other customer service purposes.</p>
                <p>IPROTECT does not use your personally identifiable information or location information to send commercial or marketing SMS text messages or email messages to you without your express consent or unless if you have opted-in to be part of a specific program or feature in accordance with the applicable IPROTECT Services consent procedures.</p>
                <h1>When we disclose collected information</h1>
                <p>IPROTECT may release personally identifiable, registration, profile, or location information if required to do so by law.</p>
                <p>IPROTECT also reserves the right to disclose personally identifiable, registration, profile, or location information that IPROTECT believes, in good faith, is appropriate or necessary to: enforce our Terms of Service; take precautions against liability; protect Users from fraudulent, abusive, or unlawful uses; investigate and defend ourselves against any third-party claims or allegations; protect the security or integrity of the IPROTECT Services; or protect the rights, property, or personal safety of IPROTECT, Users, or others.</p>
                <p>IPROTECT does not share your personally identifiable information or personally-identifiable location information with other, third-party companies for their commercial or marketing use without your express consent or unless you have opted-in to be part of a specific program or feature in accordance with the applicable IPROTECT Services consent procedures.</p>
                <p>IPROTECT does not share aggregate usage information or anonymous log files with third-party companies.</p>
                <h1>Data Security</h1>
                <p>IPROTECT uses commercially reasonable physical, managerial, and technical safeguards. We cannot, however, ensure or warrant the security of any information that IPROTECT receives on your behalf to operate the IPROTECT Services or that you transmit to IPROTECT and you do so at your own risk. We also cannot guarantee that such information may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, ethical, or managerial safeguards.</p>
                <p>If IPROTECT learns of a security systems breach, then we may attempt to notify you electronically so that you can take appropriate protective steps. IPROTECT may post a notice on the IPROTECT Services if a security breach occurs. Depending on where you live, you may have a legal right to receive notice of a security breach in writing.</p>
                <h1>Usage Rules: Prohibited conduct and Uses</h1>
                <p>You understand and hereby acknowledge and agree that you may not and warrant that you will not:</p>
                <ol>
                    <li>use IPROTECT Services only on devices that you own or have legal permission to do so</li>
                    <li>use the IPROTECT Services or any location information displayed within the IPROTECT Services to stalk, harass, abuse, defame, threaten or defraud other Users, or collect, attempt to collect, or store location or personal information about others</li>
                    <li>use the IPROTECT Services for any commercial or non-private use, it being understood that the IPROTECT Services are for personal, non-commercial use only</li>
                    <li>use the IPROTECT Services for any illegal purpose, or in violation of any local, state, national, or international law, including, without limitation, laws governing intellectual property and other proprietary rights, data protection and privacy, and import or export control</li>
                    <li>impersonate any person or entity, falsely claim an affiliation with any person or entity, or access the LSDroid Services accounts of other Users</li>
                    <li>share IPROTECT-issued passwords or access to your mobile device while IPROTECT is running and accessible with any third party or encourage any other user to do so</li>
                    <li>misrepresent the source, identity or content of information transmitted via the IPROTECT Services</li>
                    <li>remove, circumvent, disable, damage or otherwise interfere with security-related features of the IPROTECT Services, features that prevent or restrict use or copying of any content accessible through the IPROTECT Services, or features that enforce limitations on use of the IPROTECT Services</li>
                    <li>intentionally interfere with or damage operation of the IPROTECT Services or any user's enjoyment of them, by any means, including uploading or otherwise disseminating viruses, worms, or other malicious code</li>
                    <li>attempt to gain unauthorized access to the IPROTECT Services, or any part of it, other accounts, computer systems or networks connected to the IPROTECT Services, or any part of it, through hacking, password mining or any other means or interfere or attempt to interfere with the proper working of the IPROTECT Services or any activities conducted on the IPROTECT Service</li>
                    <li>sell or transfer or allow another person to access your account password, profile, or IPROTECT Services account</li>
                </ol>
            </div>
        </div>
    )
}

export default Privacy