import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import './register.scss'
const LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(user: { email: $email, password: $password }) {
      userId
      token
      isAdmin
    }
  }
`;

const Login =()  =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data }] = useLazyQuery(LOGIN);

//   useEffect(() => {
//     if(data) { 
//         const userData = {
//           "userId": data.login.userId,
//           "token": data.login.token
//         }
//     }
//   }, [data]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          login({ variables: { email: email, password: password } });
        }}
      >
        <div className="form">        
          <span>E-mail</span>

        <div className="form__inputs">
          <input
            onChange={e => setEmail(e.target.value)} />
        </div>         
         <span>Password</span>
        <div className="form__input">
          <input
            onChange={e => setPassword(e.target.value)} />
        </div>
        </div>
        <button className="button__login" type="submit">Login</button>
      </form>
    </div>
  )
};
export default Login;