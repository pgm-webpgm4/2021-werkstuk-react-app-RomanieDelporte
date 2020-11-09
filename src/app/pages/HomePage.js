import React, { } from 'react';
// import { Link, NavLink  } from 'react-router-dom';
// import * as Routes from '../routes';
import './Homepage.scss';


import homepage from '../assets/images/homepage.jpeg';
// homepage
const HomePage = ({children}) => {
  return (
    <div className="home">
      <img className="home__image"src={homepage} alt=""/>

     <div>Home</div>
     </div>

  );
};

export default HomePage;