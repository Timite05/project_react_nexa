import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WelcomePage from './WelcomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactDetailsPage from './ContactDetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<WelcomePage />}> </Route>
      <Route path='/contact-details' element = {<ContactDetailsPage/>}></Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);


reportWebVitals();