import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ListeContactPage() {
  
  return (
  <>
  
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

