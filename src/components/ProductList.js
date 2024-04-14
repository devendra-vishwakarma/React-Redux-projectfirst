import axios from 'axios';
import React,{ useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/ProductSlice';
function ProductList() {
    const dispatch = useDispatch();
    const { data: Products, status } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(add(product));
    };
   console.log("this is array",Products);
    return (
        <div className='productWrap'>
            {Products.map((product, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={product.image} alt="" />
                        <h3>{Products.title}</h3>
                        <h3>Price: {product.price}$</h3>
                        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                    </div>
                )

            })}
        </div>
    )
}

export default ProductList;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../store/cartSlice';
// import { fetchProduct } from '../store/ProductSlice';

// function ProductList() {
//     const dispatch = useDispatch();
//     const { data: Products, status } = useSelector(state => state.product);

//     useEffect(() => {
//         dispatch(fetchProduct());
//     }, [dispatch]);

//     const handleAddToCart = (product) => {
//         dispatch(add(product));
//     };

//     return (
//         <div className='productWrap'>
//             {status === 'loading' && <div>Loading...</div>}
//             {status === 'succeeded' && Products && Products.map((product, index) => (
//                 <div key={index} className='card'>
//                     <img src={product.image} alt={product.title} />
//                     <h3>{product.title}</h3>
//                     <h3>Price: {product.price}$</h3>
//                     <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
//                 </div>
//             ))}
//             {status === 'failed' && <div>Failed to load products.</div>}
//         </div>
//     );
// }

// export default ProductList;
