import React from 'react';
import './ProductCarousel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductCarousel({ products }) {
  return (
    <>
      <div className="product-carousel">
        {products.map((product) => (
          <div key={product.id} className="individual-product">
            <h3>{product.title}</h3>
            <h3>{product.daw}</h3>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </>
  );
}
