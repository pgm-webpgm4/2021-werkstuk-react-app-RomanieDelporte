 import React, { } from 'react';

 import {ProductDetailPage} from '../components/shampoo';

const ProductsDetailPage = ({children}) => {
  return (
      <div>
        <div className="col-12">
        <ProductDetailPage/>  
        </div>
        
      </div>
  )
};

export default ProductsDetailPage;