import React, { } from 'react';

import {GetCategory} from '../components/shampoo';

const ShampooPage = ({children}) => {
  return (
    <>
    <div>Shampoos</div>
    <GetCategory/>
    </>
  );
};

export default ShampooPage;