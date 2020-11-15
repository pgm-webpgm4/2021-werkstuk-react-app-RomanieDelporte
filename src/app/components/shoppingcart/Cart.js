import React, {useEffect, useState} from 'react';


import './shoppingcart.scss';
const ShoppingCartPage = ({Children}) => {

    

    

     
         const data = JSON.parse(localStorage.getItem('productInfo'));
         console.log(data);
    

     return (
         <div className="shopping">
             {data.map(cart => {
                 console.log(cart);
                 return ( 
                 <>
                 <div className="shopping__items">
                 <p>{cart.title}</p>
                 <p>{cart.price}</p>
                 <button  type="submit">Remove</button>
                 </div>
                    </>
                    )
                
                 
             })}
         </div>
     )
      
}

export default ShoppingCartPage;