import React, { } from 'react';

import {ShoppingCartPage} from '../components/shoppingcart';
const CartPage = ({children}) => {
  return (
      <div> 
        <div className="container">
          <h1>Winkelmandje</h1>
          <ShoppingCartPage/>
</div>
      </div>
   

  );
};

export default CartPage;