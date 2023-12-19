import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail({ product }) {
  function addToCart(e) {
    console.log('Added to cart');
  }
  return (
    <>
      <div>{product.title}</div>
      <button onClick={addToCart}>ADD TO CART</button>
    </>
  );
}
