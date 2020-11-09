import React, { useState, useEffect } from 'react';
import { gql, useMutation } from '@apollo/client';


import './register.scss'
const REGISTER = gql`
  mutation register($email: String!, $password: String!) {
    register(user: { email: $email, password: $password }) {
      id
    }
  }
`;

const Register =()  =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { data }] = useMutation(REGISTER);

  useEffect(() => {
    if(data) { console.log(data); }
  }, [data]);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          register({ variables: { email: email, password: password } });
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
        <button className="button_registers" type="submit">Registreer</button>
      </form>
    </div>
  )
};
export default Register;