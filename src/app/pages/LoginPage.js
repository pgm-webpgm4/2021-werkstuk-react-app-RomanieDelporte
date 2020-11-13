import React, { } from 'react';
import LoginAdmin from '../admin/Login';

const LoginPage = ({children}) => {
  return (
      <div> 
        <div className="container">
          <div>Login</div>
        <LoginAdmin/>          
</div>
      </div>
   

  );
};

export default LoginPage;