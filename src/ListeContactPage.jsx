import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ListeContactPage() {

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
                    <DataTable>
                        <Column field="name" header="Nom"></Column>
                        <Column field="username" header="Prénom"></Column>
                        <Column field="email" header="Adresse Email"></Column>
                        <Column field="phone" header="Numéro de téléphone"></Column>
                        <Column header="Actions">
                        </Column>
                    </DataTable>
                </div>
            </div>
          
        </div>
  
  </>

);
}

