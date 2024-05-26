import React from 'react';
import Product from './Product';

const Products = () => {
    return (
        <div>
            <h1 className='my-8 text-center text-5xl font-bold'>Our products</h1>
            <div className='flex gap-4 justify-center'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                
                
            </div>
        </div>

    );
};

export default Products;