import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBEHXeSndQ-YK6i8ViKgx7Ej2A1CwQ_7VQ",
  authDomain: "proyecto-ecommerce-react-97835.firebaseapp.com",
  projectId: "proyecto-ecommerce-react-97835",
  storageBucket: "proyecto-ecommerce-react-97835.appspot.com",
  messagingSenderId: "984690906846",
  appId: "1:984690906846:web:dc71a37fe1d3ffa4aed44f"
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
