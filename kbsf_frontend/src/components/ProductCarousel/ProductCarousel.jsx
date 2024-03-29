import React from 'react';
import './ProductCarousel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  const displayedProducts = () => {
    if (!dawName) {
      // If dawName is not provided, filter to show only featured products
      return products.filter((product) => product.isFeatured);
    } else {
      // If dawName is provided, filter products based on dawName
      return products.filter((product) => product.daw === dawName);
    }
  };

  return (
    <div className="product-carousel">
      {displayedProducts().map((product) => (
        <Link to={'/product/' + product.id}>
          <div key={product.id} className="individual-product">
            <h3>{product.title}</h3>
            <img
              src={product.image_url}
              alt={product.title}
              className="product-pic"
            ></img>{' '}
            <h3>
              {dawName
                ? getDisplayDawName(product.daw)
                : getDisplayDawName(product.daw)}
            </h3>
            {/* Render other product details */}
          </div>
        </Link>
      ))}
    </div>
  );
}
