import React from 'react';
import '../css/resetpass.css';
import "../css/general-forms.css";
import { Link } from 'react-router-dom';

const ResetPass = () => {
    return (
        <div className="wrapper">
            <div className="background"></div>
            <div className='content'>
                <img src={require("../res/secondary-logo.png")} alt="Logo" className="logo" />
                <div className="reset-container">
                    <form className="reset-form">
                        <div className='reset-title'>Reset Password</div>
                        <div className="form-group">
                            <input type="text" id="username" name="username" placeholder='Email' />
                        </div>
                        <div className='newAccount'>
                            <p>New user?</p>
                            <Link to="/register" style={{textDecoration: 'none'}}>Register</Link>
                        </div>
                        <div className='existingUser'>
                            <p>Existing user?</p>
                            <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
                        </div>
                        <button type="submit" className="reset-button">Reset Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;