// kbsf_frontend/src/components/ProductDetail/ProductDetail.jsx
import React from 'react';
import axios from 'axios';
import './ProductDetail.css';

const dawDisplayMap = {
  protools: 'Pro Tools',
  logic: 'Logic',
  ableton: 'Ableton',
  bandlab: 'BandLab',
  flstudio: 'FL Studio',
  // Add other mappings as needed
};

export default function ProductDetail({ product, setCartItems, cartItems }) {
  const getDisplayDawName = (dawName) => {
    return dawDisplayMap[dawName.toLowerCase()] || dawName;
  };
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
      <div className="product-detail-page-container">
        <div key={product.id} className="individual-product">
          <h3>{product.title}</h3>
          <img
            src={product.image_url}
            alt={product.title}
            className="product-pic-detail-page"
          ></img>{' '}
          <h4>{product.description}</h4>
          <h3 className="price-header">Price: ${product.price}</h3>
          {/* Render other product details */}
        </div>{' '}
        <button onClick={addToCart} className="cart-button">
          ADD TO CART
        </button>
      </div>
    </>
  );
}
