import React, { } from 'react';
import { Link, NavLink  } from 'react-router-dom';


import * as Routes from '../../routes';

import './Header.scss';

// header en hamburgermenu

const Header = ({children}) => {

  return (
  <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
          <Link to={Routes.LANDING} className="header__link">De Hoofdzaak</Link>
          </div>
          <div className="col-6">
          <ul className="header__nav">
            {/* <li className="nav_item">
              <NavLink to={Routes.HOME} className="nav-link" activeClassName="active">Home</NavLink>
            </li>  */}
            <li className="nav_item">
              <NavLink to={Routes.SHAMPOO} className="nav-link" activeClassName="active">Shampoo</NavLink>
            </li> 
            <li className="nav_item">
              <NavLink to={Routes.CONDITIONER} className="nav-link" activeClassName="active">Conditioner</NavLink>
            </li>          
            <li className="nav_item">
              <NavLink to={Routes.MASKS} className="nav-link" activeClassName="active">Masks</NavLink>
            </li> 
            <li className="nav_item">
              <NavLink to={Routes.CONTACT} className="nav-link" activeClassName="active">Contact</NavLink>
            </li> 
            <button className="nav_item">
              <NavLink to={Routes.REGISTER} className="nav-link" activeClassName="active">Registreer</NavLink>
            </button> 
          </ul>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Header;