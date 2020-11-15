import React, { } from 'react';

import {ShoppingCartPage} from '../components/shoppingcart';
const CartPage = ({children}) => {
  return (
      <div> 
        <div className="container">
          <div>ShoppingCart</div>
          <ShoppingCartPage/>
</div>
      </div>
   

  );
};

export default CartPage;