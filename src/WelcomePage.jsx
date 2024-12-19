import React, { useState, useEffect } from 'react';
import './App.css';
import outilsImage from './outils.png';
import ListeContactPage from './ListeContactPage';

export default function WelcomePage() {
  // useState est un hook React pour ajouter un état local à un composant fonctionnel
  // false pour la second page s'affiche pas au premier
  // la 1ere une var et la 2eme une fonction pour mettre à jour l'etat
  const [showSecondPage, setShowSecondPage] = useState(false);

  useEffect(() => {
    // un timer qui declenche setShowSecondPage aprés 2 secondes
    const timer = setTimeout(() => {
      setShowSecondPage(true);
    }, 2000); // Transition après 3 secondes

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
          style={{ width: '300px', height: 'auto' }} 
        />
        <h1 style={{ color: '#303030' }}><strong>Gérer Vos Contacts</strong></h1>
      </header>
    </div>
  );
}



