import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

function CategoryPage() {
  
  const [products, setProducts] = useState([]);
  const { dawName } = useParams(); // Get the dawName from the URL

  // useEffect(() => {
  //   setProducts([]);
  //   axios
  //     .get(`http://localhost:8000/api/category/${dawName}/`)
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, [dawName]);
  useEffect(() => {
    setProducts([]);

    const fetchUrl = dawName
      ? `http://localhost:8000/api/category/${dawName}/`
      : `http://localhost:8000/api/products/featured/`; // URL for featured products

    axios
      .get(fetchUrl)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [dawName]);

  return <ProductCarousel products={products} dawName={dawName} />;
}

export default CategoryPage;
