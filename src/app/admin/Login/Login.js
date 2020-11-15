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

      // if(data.login.isAdmin) {
      //   console.log("yes you are the admin")
      // } else {
      //   console.log("You are not allowed")
      // }
      // console.log(data);     

      const login = {
        "userId": data.login.userId,
        "token": data.login.token,
        "isAdmin": data.login.isAdmin,
      }
      let logindata  = JSON.parse(localStorage.getItem('Login'))|| [];
      console.log(logindata);
      logindata.push(login);
      localStorage.setItem('Login', JSON.stringify(logindata)); 
      
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