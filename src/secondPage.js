import React, { useState } from 'react';
import './App.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



function SecondPage() {
  const [phone, setPhone] = useState('');

  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  };

  const formContainerStyle = {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    textAlign: 'left',  
    width: '100%',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#619caf',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  };

  const phoneInputStyle = {
    ...inputStyle,
    paddingLeft: '50px', // Espace pour le drapeau et le préfixe
  };

  const handlePhoneChange = (value, country) => {
    setPhone(value);
  };


  return (
    <div className="App" style={pageStyle}>
      <div style={formContainerStyle}>
        <form>
          <div>
            <label style={labelStyle}>Nom :</label>
            <input
              type="text"
              placeholder="Entrez le nom"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Email :</label>
            <input
              type="email"
              placeholder="Entrez l'email"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Téléphone :</label>
            <PhoneInput
              country={'fr'}
              value={phone}
              onChange={handlePhoneChange}
              inputStyle={phoneInputStyle}
              buttonStyle={{
                backgroundColor: 'transparent',
                border: 'none',
                paddingLeft: '10px'
              }}
              dropdownStyle={{
                width: '300px'
              }}
              prefix="+"
              disableCountryCode={false}
              countryCodeEditable={false}
            />
          </div>

          <button type="submit" style={buttonStyle}>Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default SecondPage;
