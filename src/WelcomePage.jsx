import React, { useState, useEffect } from 'react';
import './App.css';
import outilsImage from './outils.png';
import ListeContactPage from './ListeContactPage';

export default function WelcomePage() {
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPage(true);
    }, 3000); // Transition après 3 secondes

    return () => clearTimeout(timer);
  }, []);

  if (showSecondPage) {
    return <ListeContactPage />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={outilsImage} 
          alt="Outils" 
          style={{ width: '350px', height: 'auto' }} 
        />
        <h1 style={{ color: '#303030' }}><strong>Gérer Vos Contacts</strong></h1>
      </header>
    </div>
  );
}



