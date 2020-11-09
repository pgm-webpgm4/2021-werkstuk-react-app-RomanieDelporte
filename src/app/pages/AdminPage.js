import React, { } from 'react';
import Admin from '../admin';

const AdminPage = ({children}) => {
  return (
      <div> 
        <div className="container">
          <div>Registreer</div>
          <Admin/>
          </div>
      </div>
   

  );
};

export default AdminPage;