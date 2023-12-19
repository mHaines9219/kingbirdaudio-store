// kbsf_frontend/src/components/ProductDetail/ProductDetail.jsx
import React from 'react';
import axios from 'axios';

export default function ProductDetail({ product, setCartItems, cartItems }) {
  const addToCart = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/add-to-cart/${product.id}/`
      );
      if (response.status === 201) {
        setCartItems((prevItems) => [...prevItems, product]);
        console.log('Added to cart');
        console.log(cartItems);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <>
      <div>{product.title}</div>
      <button onClick={addToCart}>ADD TO CART</button>
    </>
  );
}
