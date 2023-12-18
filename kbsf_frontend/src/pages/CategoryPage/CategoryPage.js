import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../API.js';
import axios from 'axios';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products/')
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        console.error('Attempted to reach: ', error.config.url);
      });
  }, []);

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </div>
  );
}
