// DetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

function DetailPage() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();
  console.log('Product ID:', productId);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${productId}/`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return <ProductDetail product={product} productId={productId} />;
}

export default DetailPage;
