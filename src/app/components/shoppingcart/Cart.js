import React from 'react';


import './shoppingcart.scss';
const ShoppingCartPage = ({Children}) => {

    const data = JSON.parse(localStorage.getItem('productInfo')) || [];
         console.log(data);
    

     return (
         <>
         <div className="shopping">
             {data.map(cart => {
                 console.log(cart);
                 return ( 
                 <>
                 <div className="shopping__items">
                 <p>{cart.title}</p>
                 <p>{cart.price}</p>
                 <button onSubmit={data => { window.localStorage.removeItem(data)}}  type="submit">Remove</button>
                 </div>
                 
                    </>
                    )
                
                 
             })}
            
         </div>
         <button type="submit">Checkout</button>
         </>
     )
      
}

export default ShoppingCartPage;