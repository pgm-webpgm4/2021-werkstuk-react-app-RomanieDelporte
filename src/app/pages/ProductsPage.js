import React, { } from 'react';

import {GetCategory} from '../components/shampoo';

const ShampooPage = ({children}) => {
  return (
    <>
    <div className="container">
        <div className="col-12">
          <h1>Alle producten</h1>
              <GetCategory/>
        </div>
    </div>
    </>
  );
};

export default ShampooPage;