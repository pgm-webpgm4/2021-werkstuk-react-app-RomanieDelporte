import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import * as Routes from '../routes';
import './Homepage.scss';



import homepage from '../assets/images/homepage.jpeg';
// homepage
const HomePage = ({children}) => {
  return (  
  <div className="home">
    <div className="container">
       <div className="row">
         <div className="col-6">
         <div className="home__content">
           <h2>Make Your</h2>
           <h2>Hair Great</h2>
           <h2>Again.</h2>
           <div className="home__routes">
           <NavLink to={Routes.PRODUCTS} className="nav-products" activeClassName="active">Bekijk al onze producten</NavLink> 
           </div>        
           </div>
         </div>
         <div className="col-4">
         <div className="home__image">
             <img src={homepage}/>
         </div> 
                

         </div>
       </div>
       </div>
       </div>

  );
};

export default HomePage;