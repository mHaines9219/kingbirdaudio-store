import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import Navbar from '../../components/Navbar/Navbar';

export default function DetailPage() {
  return (
    <>
      <ProductDetail />
      <Footer />
    </>
  );
}
