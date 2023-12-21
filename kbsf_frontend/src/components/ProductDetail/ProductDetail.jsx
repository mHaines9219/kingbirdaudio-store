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
        setCartItems((prevItems) => {
          // Check if the product is already in the cart
          if (prevItems.some((item) => item.id === product.id)) {
            console.log('Product already in cart');
            return prevItems; // Return the original cart items without adding
          }

          const updatedCartItems = [...prevItems, product];
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
          return updatedCartItems;
        });
        console.log('Added to cart');
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
