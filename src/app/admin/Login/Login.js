import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
// import { Redirect } from "react-router-dom";

// import {  NavLink  } from 'react-router-dom';


// import * as Routes from '../../routes';

import '../register.scss'
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
  // const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   if(data) { console.log(data);    
  //     console.log(data.login.isAdmin);
  //     if(data.login.isAdmin) {
  //         // return <Redirect to={Routes.HOME}/>;
  //         console.log("Yes you are the admin");

  //       } else {
  //       console.log("You are not allowed to do this");
  //   }
    
  //   }
  // }, [data]);

  useEffect(() => {  
    if(!!data) {
      console.log(data);     
      window.localStorage.setItem('userId', data.login.userId);
      window.localStorage.setItem('token', data.login.token);
      window.localStorage.setItem('isAdmin', data.login.isAdmin);
    }
  }, [data]);


  


 
  return (
    <div>
      <form 
        onSubmit={e => {
          e.preventDefault();
          login({ variables: { email: email, password: password  } });
        }}
      > 
        <div className="form">        
          <span>E-mail</span>

        <div className="form__inputs">
          <input
             type="email" onChange={e => setEmail(e.target.value)} />
        </div>         
         <span>Password</span>
        <div className="form__input">
          <input
            type="password" onChange={e => setPassword(e.target.value)} />
        </div> 
        </div>
        <button className="button__login" type="submit">Login</button>
      </form>
    </div>
  )
};
export default Login;