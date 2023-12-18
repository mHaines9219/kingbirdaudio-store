import React from 'react';
import './ProductCarousel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const dawDisplayMap = {
  protools: 'Pro Tools',
  logic: 'Logic',
  ableton: 'Ableton',
  bandlab: 'BandLab',
  flstudio: 'FL Studio',
  // Add other mappings as needed
};
export default function ProductCarousel({ products, dawName }) {
  const getDisplayDawName = (dawName) => {
    return dawDisplayMap[dawName.toLowerCase()] || dawName;
  };

  return (
    <>
      <div className="product-carousel">
        {products.map((product) => (
          <div key={product.id} className="individual-product">
            <h3>{product.title}</h3>
            <h3>{getDisplayDawName(product.daw)}</h3>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </>
  );
}
