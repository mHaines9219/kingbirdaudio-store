import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';
import Navbar from '../components/Navbar';

export default function DetailPage() {
  return (
    <>
      <Navbar />
      <ProductDetail />
      <Footer />
    </>
  );
}
