import React from 'react';
import  { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function ListeContactPage() {
  const [contact, setContact] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
    

  useEffect(() => {
    // Appel à une API pour récupérer des données
    fetch("http://localhost:3004/contact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des données");
        }
        return response.json();
      })
      .then((contact) => {
        setContact(contact); // Met à jour l'état avec les données récupérées
        setLoading(false); // Désactive le chargement
      })
      .catch((error) => {
        setError(error.message); // Met à jour l'état en cas d'erreur
        setLoading(false); // Désactive le chargement
      });
  }, []); // Le tableau vide [] signifie que l'effet ne s'exécutera qu'une seule fois au montage

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }
// fonction de suppression d'un élément à travers son ID


 
const handleDelete = async (id) => {
  
  try {
    // Appeler l'API pour supprimer l'élément
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?"))
    await fetch(`http://localhost:3004/contact/${id}`, { method: "DELETE" });

    // Mettre à jour localement après succès
    const updatedContact = contact.filter((contact) => contact.id !== id);
    setContact(updatedContact);
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
  }
 
  };

  return (  
  <>
<nav class="navbar" style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid">
    <a class="navbar-brand"></a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search Contact" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
   <div className='users-page'>
            <div className='container'>
                <h1>
                    Bienvenue dans Votre Repertoire.
                </h1>
                <h3>Ici vous pouvez gérer votre répertoire personnel de contact </h3>

                <div className='users-list'>
                    <div className='addNewUser'>
                        <button className='btn btn-success'>
                            Ajouter Contact    
                        </button>   
                    </div>
                    <div>
    <table border="0" width="100%" cellPadding="10" style={{
    borderCollapse: "separate", // Important pour que border-spacing fonctionne
    borderSpacing: "0 10px" 
    }}>
        
        <tr style={{
        backgroundColor:"blue",
         padding: "10px"
      }} >
            <th>Id</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>mail</th>
            <th>tel</th>
            <th>Actions</th>
          </tr>
          {contact.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.nom}</td>
              <td>{contact.prenom}</td>
              <td>{contact.mail}</td>
              <td>{contact.tel}</td>
              <td className="action-buttons">
                <button className="btn btn-primary">
                <i className="fas fa-eye" style={{ marginRight: "5px" }}></i>
                </button>
                <button 
                onClick={() => handleDelete(contact.id)} 
                className="btn btn-danger" style={{ marginRight: "5px",  }}>
                <i className="fas fa-trash" style={{ marginRight: "5px" }}></i> 
                </button>
              </td>
            </tr>
          ))}
      </table>
                  </div>
                </div>
            </div> 
        </div>
  </>

);
}

