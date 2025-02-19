import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache, HttpLink, ApolloLink, ApolloClient } from '@apollo/client';
// import { ApolloClient } from 'apollo-boost';
import App from './app';
import reportWebVitals from './reportWebVitals';




/**
 * create a new apollo client
 */

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : 'https://graphql-webshop.herokuapp.com/',
});

const authLink  = new ApolloLink((operation, forward) => {
  // grab the token form localstorage
    const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmFlNjAzMDU3YjlhNDMwMzc4ZDU3NzEiLCJlbWFpbCI6InJvbWFuaWVkZWxwb3J0ZTIzMEBnbWFpbC5jb20iLCJpYXQiOjE2MDUyNjM0MTMsImV4cCI6MTYwNTI2NzAxM30.D2jd8QTIKtQqYAnA7G1CPMprEVkb5hBaQt95h_nOAlI";

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token} `: ''     
      }
    });

    return forward(operation);
});

// init apolloclient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
