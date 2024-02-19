import React from 'react';
import '../css/register.css';
import "../css/general-forms.css";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import PrimaryButton from '../components/PrimaryButton';
import PrimaryInput from '../components/PrimaryInput';

// Firebase
import { app, auth } from '../firebase'
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from 'firebase/database';
import 'firebase/compat/database'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Register = () => {
    let navigate = useNavigate();
    // User podatki
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handlePasswordChange = text => {
        setPassword(text);
    };

    const handlePassword2Change = text => {
        setPassword2(text);
    };

    const handleEmailChange = text => {
        setEmail(text);
    };

    const createUser = async (e, email, password) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
        const userId = userCredential.user.uid;
        const userData = {
          email: userCredential.user.email,
        };
      const db = getDatabase(app);
      
      set(ref(db, `uporabnik/${userId}`), userData);
      })
      .catch((error) => {
        setErrorMessage(error.code, " ", error.message);
          setTimeout(() => {
            setErrorMessage("");
          }, 4000);
      });
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/map');
        })
        .catch((error) => {
            setErrorMessage(error.code, " ", error.message);
            setTimeout(() => {
              setErrorMessage("");
            }, 4000);
        });
      }

    return (
        <div className="wrapper">
            <div className="background"></div>
            <div className='content'>
                <img src={require("../res/secondary-logo.png")} alt="Logo" className="logo" />
                <div className="register-container">
                    <form className="register-form">
                        <div className='register-title'>Register</div>
                        <div className="form-group">
                            <PrimaryInput type="text" placeholder="Email" value={email} handlerFunction={handleEmailChange}/>
                            {/* <input type="text" placeholder='Email' value={email} onChange={e => handleEmailChange(e.target.value)} /> */}
                        </div>
                        <div className="form-group">
                            <PrimaryInput type="password" placeholder="Password" value={password} handlerFunction={handlePasswordChange}/>
                            {/* <input type="password" id="password" placeholder='Password' value={password} onChange={e => handlePasswordChange(e.target.value)}/> */}
                        </div>
                        <br/>
                        <div className="form-group">
                            <PrimaryInput type="password" placeholder="Repeat password" value={password2} handlerFunction={handlePassword2Change}/>
                            {/* <input type="password" id="password-repeat" placeholder='Repeat password' value={password2} onChange={e => handlePassword2Change(e.target.value)}/> */}
                        </div>
                        <br/>
                        <div className='newAccount'>
                            <p>Existing user?</p>
                            <Link to="/login" style={{textDecoration: 'none'}}>Login</Link>
                        </div>
                        <PrimaryButton handlerFunction={createUser} prop1={email} prop2={password} prop3={true}/>
                        {/* <button type="submit" className="register-button" onClick={e => createUser(e, email, password)}>Register</button> */}
                    </form>
                </div>
                <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>
            </div>
        </div>
    );
}

export default Register;
