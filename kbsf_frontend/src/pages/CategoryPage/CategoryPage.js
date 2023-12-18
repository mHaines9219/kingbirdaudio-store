import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import API from '../../API.js';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/')
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* Render other product details */}
          </div>
        ))}
      </div>
    </div>
  );
}
