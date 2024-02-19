import React from 'react';
import './resetpass.css';
import "./general-forms.css";

const ResetPass = () => {
    return (
        <div className="wrapper">
            <div className="background"></div>
            <div className='content'>
                <img src={require("./assets/images/secondary-logo.png")} alt="Logo" className="logo" />
                <div className="reset-container">
                    <form className="reset-form">
                        <div className='reset-title'>Reset Password</div>
                        <div className="form-group">
                            <input type="text" id="username" name="username" placeholder='Email' />
                        </div>
                        <div className='newAccount'>
                            <p>New user?</p>
                            <a href="./register.js">Register</a>
                        </div>
                        <div className='existingUser'>
                            <p>Existing user?</p>
                            <a href="./login.js">Login</a>
                        </div>
                        <button type="submit" className="reset-button">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;