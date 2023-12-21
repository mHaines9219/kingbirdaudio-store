// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import API from '../API';
import Navbar from '../../components/Navbar/Navbar';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import Footer from '../../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import DetailPage from '../DetailPage/DetailPage';
import CategoryPage from '../CategoryPage/CategoryPage';
import ProfilePage from '../Profile/Profile';
import Checkout from '../Checkout/Checkout';
import PurchaseSuccessful from '../PurchaseSuccessful/PurchaseSuccessful';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage on initial render
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
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
    <>
      <div className="App">
        <div className="site-banner">
          <h1>KINGBIRD AUDIO</h1>
          <h3>TEMPLATES AND PRESETS FOR THE MODERN MUSICIAN</h3>
        </div>
        <Navbar setCartItems={setCartItems} cartItems={cartItems} />
        <Routes>
          <Route
            path="/category/:dawName"
            element={
              <CategoryPage setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path="/"
            element={
              <CategoryPage setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path="/product/:productId"
            element={
              <DetailPage setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route
            path="/checkout"
            element={
              <Checkout setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
