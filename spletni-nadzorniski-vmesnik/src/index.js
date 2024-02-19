import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBk85lieMfHiTm8dF6UjIF2-1ej8bdJ6Z8",
  authDomain: "security-app-rpo-c1ab6.firebaseapp.com",
  databaseURL: "https://security-app-rpo-c1ab6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "security-app-rpo-c1ab6",
  storageBucket: "security-app-rpo-c1ab6.appspot.com",
  messagingSenderId: "742468055181",
  appId: "1:742468055181:web:f5cffab259f583ccf032c4",
  measurementId: "G-J1MEL94BJW"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
