import React from 'react';
import { useQuery, gql, NetworkStatus } from '@apollo/client';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';

import './ShampooList.scss';

// ophalen van data
const CATEGORIES = gql`

    {
  products {
    id
    title
    quantity
    price
    image
  }
}
`;


// localStorage.setItem('CATEGORIES', JSON.stringify(CATEGORIES));
// const localItem = localStorage.getItem('CATEGORIES');
// console.log('localItem: ', JSON.parse(localItem));

const GetCategory =() => {

    // die usequery wordt opgevraagd elke keer onze component wordt gerenderd
    // loading  je krijgt een status wanneer er data wordt geladen
    // error  wanneer er zich iets fout voordoet
    //  data wanneer je de data effectief hebt dus er is iets succesvol gebeurd
    //  refetch je kan de data opnieuw ophalen die in de usequery zit
    const { loading, error, data, networkStatus } = useQuery(CATEGORIES, {});



  if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
  if(loading) return 'loading...';
  if(error) return `ERROR: ${error.message}`;
  // if(lazyQueryParams.loading) return 'loading user...';


   return (
    <>
      {!loading && (
        <div className="row">
            {data.products.map(product => (
              <div className="card__products col-4 col-md-4" key={product.id}>
             <div className="card" key={product.id}>
               <img src={product.image} className="card-img-top" alt=""/>
              <div className="card-body">
                 <h5 className="card-title">{product.title}</h5>
                 <p className="card-text">{product.price}</p> <p className="card__quantity">{product.quantity}</p>
                  <Link to={Routes.PRODUCTS_DETAIL.replace(':id', product.id)} className="btn-detail">Bekijk meer</Link>
               </div>
             </div>
              </div>
            ))}</div>
        )}
    </>
  ); 
}   

export default GetCategory;



