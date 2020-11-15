import React from 'react';





import './shoppingcart.scss';
const ShoppingCartPage = ({Children}) => {

    const data = JSON.parse(localStorage.getItem('productInfo')) || [];
         console.log(data);
    
         function deleteItem() {
            localStorage.removeItem("productInfo");
            setTimeout(function(){
                window.location.reload();
            }, );
          }

          console.log(deleteItem);



     return (
         <>
         <div className="shopping">
             {data.map(cart => {
                 console.log(cart);
                 return ( 
                 <>
                 <div className="shopping__items" key={data.id}>
                 <p>{cart.title}</p>  
                 <p>{cart.quantity}</p>
                 <p>{cart.price}</p>
                 </div>

                 
                    </>
                    )
                
                 
             })}

         </div>   
         <div class="removed">
          <button onClick={deleteItem} type="submit">Remove all</button>
         </div>

         </>
     )
      
}

export default ShoppingCartPage;