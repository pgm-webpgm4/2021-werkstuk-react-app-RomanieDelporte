import React, { Fragment } from 'react';

import { Header, Footer } from '../components/layout';

// inhoud elke pagina
const BaseLayout = ({children}) => (
  <Fragment>
    <Header />
    <main className="app-main">
      {children}      
    </main>
    <Footer />
  </Fragment>
);
export default BaseLayout;