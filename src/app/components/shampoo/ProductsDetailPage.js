import React, {useEffect, useState} from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';


import './ShampooList.scss';
    const GET_DETAIL = gql`
        query product($id: ID!) {
            product(id: $id) {
                id
                title
                description
                price
                image
                categories {
                    id
                    title
                }
            }
        }
    `;
const ProductDetailPage = ({Children}) => {
const  { id } = useParams();


    
const {loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id },
});


useEffect(() => {
    if(data){
        const detail = {
            "title": data.product.title,
            "price": data.product.price,
          }
          let productDetail  = JSON.parse(localStorage.getItem('productInfo'))|| [];
          console.log(productDetail);
          productDetail.push(detail);
          localStorage.setItem('productInfo', JSON.stringify(productDetail)); 
    }
},[data]);


if (loading) return "Loading...";
if (error) return `Error! ${error.message}`; 


     return (
        <>
       <div className="detail">
           <div className="container">
               <div className="row" key={data.id}>
                   <div name="image" className="detail__picture col-6">
                       <img src={data.product.image} alt=""></img>
                   </div>
                   <div name="content" className="detail__title col-6">
                        <h1>{data.product.title}</h1>
                        <div className="detail__content">
                        <p>{data.product.description}</p>
                        <p>{data.product.price}</p>
                        <button id="add"  type="submit">Add to cart</button>
                        </div>
                   </div>
               </div>
           </div>
       </div>
        </>
     )
}

export default ProductDetailPage;