import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router';

import './ShampooList.scss';

const ProductDetailPage = ({Children}) => {
        const  { id } = useParams();

        const GET_DETAIL = gql`
        query Product($id: ID!) {
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

const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { id },
});

if (loading) return "Loading...";
if (error) return `Error! ${error.message}`; 


     return (
        <>
        <div className="detail col-6">
        <h1>{data.product.title}</h1>
        <img src={data.product.image} alt=""/>
        </div>
        </>
     )
}

export default ProductDetailPage;