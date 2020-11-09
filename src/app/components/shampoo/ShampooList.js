import React from 'react';
import { useQuery, gql, NetworkStatus } from '@apollo/client';

import {useError} from '../../admin/Hooks';


const CATEGORIES = gql`

    {
  products {
    id
    title
  }
}
`;
const GetCategory =() => {
    const { handleGqlError } = useError;

    // die usequery wordt opgevraagd elke keer onze component wordt gerenderd
    // loading  je krijgt een status wanneer er data wordt geladen
    // error  wanneer er zich iets fout voordoet
    //  data wanneer je de data effectief hebt dus er is iets succesvol gebeurd
    //  refetch je kan de data opnieuw ophalen die in de usequery zit
    const { loading, error, data, networkStatus } = useQuery(CATEGORIES, {
    onError: handleGqlError,
    fetchPolicy: "cache-first", // https://www.apollographql.com/docs/react/data/queries/#supported-fetch-policies
    notifyOnNetworkStatusChange: true,
    // pollInterval: 500,
  });

    // wil je data ophalen door op een button te clicken dan gebruik je uselazyquery
    // const [getUser, lazyQueryParams] = useLazyQuery(GET_USER);

  // useEffect(() => {
  //   if(lazyQueryParams.data && lazyQueryParams.data.user) {
  //     console.log(lazyQueryParams.data.user.password);
  //   }
  // }, [lazyQueryParams.data])


  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;
  // if(lazyQueryParams.loading) return 'loading user...';


   return (
    <>
      <div className="App">
      {!loading && (
          <ul>
            {data.products.map(categorie => (
              <li key={categorie.id}>
                <h2>{categorie.title}</h2>
                {console.log(categorie)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  ); 
}   

export default GetCategory;



