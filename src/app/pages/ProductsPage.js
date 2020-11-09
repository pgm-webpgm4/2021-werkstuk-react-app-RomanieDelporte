import React, { } from 'react';

import {GetCategory} from '../components/shampoo';

const ShampooPage = ({children}) => {
  return (
    <>
    <div className="container">
        <div className="col-12">
          <div>Products</div>
              <GetCategory/>
        </div>
    </div>
    </>
  );
};

export default ShampooPage;