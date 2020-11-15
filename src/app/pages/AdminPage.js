import React, { } from 'react';
import Admin from '../admin';

const AdminPage = ({children}) => {
  return (
      <div> 
        <div className="container">
        <h1>Registreer je hier</h1>         
        <Admin/>
          </div>
      </div>
   

  );
};

export default AdminPage;