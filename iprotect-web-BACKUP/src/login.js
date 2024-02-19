import React from 'react';
import './login.css';
import "./general-forms.css";

const Login = () => {
    return (
        <div className="wrapper">
            <div className="background"></div>
            <div className='content'>
                <img src={require("./assets/images/secondary-logo.png")} alt="Logo" className="logo" />
                <div className="login-container">
                    <form className="login-form">
                        <div className='login-title'>Login</div>
                        <div className="form-group">
                            <input type="text" id="username" name="username" placeholder='Email' />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder='Password' />
                        </div>
                        <a className='forgotPassText' href="./forgot-password.js">Forgot password?</a>
                        <div className='newAccount'>
                            <p>New user?</p>
                            <a href="./register.js">Register</a>
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
