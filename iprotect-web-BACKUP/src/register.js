import React from 'react';
import './register.css';
import "./general-forms.css";

const Register = () => {
    return (
        <div className="wrapper">
            <div className="background"></div>
            <div className='content'>
                <img src={require("./assets/images/secondary-logo.png")} alt="Logo" className="logo" />
                <div className="register-container">
                    <form className="register-form">
                        <div className='register-title'>Register</div>
                        <div className="form-group">
                            <input type="text" id="username" name="username" placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder='Password' />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password-repeat" name="password" placeholder='Repeat password' />
                        </div>
                        <div className='newAccount'>
                            <p>Existing user?</p>
                            <a href="./login.js">Login</a>
                        </div>
                        <button type="submit" className="register-button">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
