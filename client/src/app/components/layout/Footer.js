import React, { } from 'react';
// import { Link  } from 'react-router-dom';

// import * as Routes from '../../routes';

import './Footer.scss';
// het tonen van de footer in de browser
const Footer = ({children}) => {
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3">
            
          </div>
        </div>
        </div>
    <div className="copyright">
      <p>©2020 Romanie Delporte. all rights reserved </p>
    </div>
    </footer>
  );
};

export default Footer;
