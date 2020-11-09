import React, { useEffect} from 'react';
import { useQuery, useLazyQuery, gql, NetworkStatus } from '@apollo/client';
import {useError} from './Hooks';
import Register from './Register'



const USERS = gql `
{
    users {
        id 
        email
        password
    }
}
`

const GET_USER = gql `
    query user($id:ID) {
        user(id:$id) {
            password
        }
    }

`


function Admin() {
    const { handleGqlError } = useError;

    // die usequery wordt opgevraagd elke keer onze component wordt gerenderd
    // loading  je krijgt een status wanneer er data wordt geladen
    // error  wanneer er zich iets fout voordoet
    //  data wanneer je de data effectief hebt dus er is iets succesvol gebeurd
    //  refetch je kan de data opnieuw ophalen die in de usequery zit
    const { loading, error, data, refetch, networkStatus } = useQuery(USERS, {
    onError: handleGqlError,
    fetchPolicy: "cache-first", // https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });

    // wil je data ophalen door op een button te clicken dan gebruik je uselazyquery
    const [getUser, lazyQueryParams] = useLazyQuery(GET_USER);

  useEffect(() => {
    if(lazyQueryParams.data && lazyQueryParams.data.user) {
      console.log(lazyQueryParams.data.user.password);
    }
  }, [lazyQueryParams.data])


  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;
  // if(lazyQueryParams.loading) return 'loading user...';


   return (
    <>
      <div className="App">
      {!loading && (
          <ul>
            {data.users.map(user => (
              <li key={user.id}>
                User with email: {user.email}. <button onClick={() => getUser({ variables: { id: user.id } })}>Get Password</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => refetch()}>Refetch</button>
      </div>
      <Register></Register>
    </>
  ); 
}   

export default Admin;
