import React, { useState, useEffect } from 'react';

export default function Checkout({ cartItems, setCartItems }) {
  const [orderCreated, setOrderCreated] = useState(false);
  const [downloadUrls, setDownloadUrls] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  const handlePayment = async () => {
    // Simulating payment processing
    console.log('Processing payment...');
    setTimeout(() => {
      console.log('Payment successful');
      processOrder();
    }, 2000); // Simulate a delay for payment processing
  };

  const processOrder = () => {
    setOrderCreated(true);
    setDownloadUrls(cartItems.map((item) => item.downloadUrl));
    console.log('Order processed');
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.title}</span>
            {/* Display other item details as needed */}
          </div>
        ))}
      </div>
      {!orderCreated ? (
        <button onClick={handlePayment}>Pay Now</button>
      ) : (
        <div>
          <h3>Thank you for your purchase! Here are your download links:</h3>
          {downloadUrls.map((url, index) => (
            <div key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Download Link {index + 1}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
