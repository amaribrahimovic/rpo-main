import React from 'react'
import '../css/register.css';
import "../css/general-forms.css";
import '../css/login.css'
import secondaryLogo from '../res/secondary-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

//Firebase
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import PrimaryInput from '../components/PrimaryInput';

const Login = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handlePasswordChange = text => {
        setPassword(text);
    };

    const handleEmailChange = text => {
        setEmail(text);
    };

    const handleLogin = (email, password)=>{
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
    <div className='background'>
        <div className='container'>
            <img src={secondaryLogo} alt="logo" />
            <div className="card">
                <h1>Prijava</h1>
                <PrimaryInput type="text" placeholder="Email" value={email} handlerFunction={handleEmailChange}/>
                {/* <input type="text" placeholder='E-pošta' value={email} onChange={e => handleEmailChange(e.target.value)}/> */}
                <div className='close'>
                    <PrimaryInput type="password" placeholder="Password" value={password} handlerFunction={handlePasswordChange}/>
                    {/* <input type="text" placeholder='Geslo' value={password} onChange={e => handlePasswordChange(e.target.value)}/> */}
                    <h4><Link to="/resetpass" style={{textDecoration: 'none'}}>Pozabil sem geslo</Link></h4>
                </div>
                <div className='close'>
                    <h4 className='txt-gray'><Link to="/register" style={{textDecoration: 'none'}}>Še nimaš računa? <b>Registracija</b></Link></h4>
                    <PrimaryButton handlerFunction={handleLogin} prop1={email} prop2={password}/>
                    {/* <button type="submit" className="register-button" onClick={() => handleLogin(email, password)}>Login</button> */}
                </div>
            </div>
        <p style={{color: 'red', textAlign: 'center'}}>{errorMessage}</p>
        </div>
    </div>
  )
}

export default Login