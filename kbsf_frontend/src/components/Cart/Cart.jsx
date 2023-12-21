import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '../../assets/cart_icon.png';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localCartItems, setLocalCartItems] = useState([]);

  // Sync cartItems prop with local state and localStorage
  useEffect(() => {
    setLocalCartItems(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Delete item from cart
  const deleteFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter((item) => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };
  return (
    <>
      <div>
        <img
          src={ShoppingCartIcon}
          alt="Cart"
          onClick={() => setIsOpen(!isOpen)}
        />
        <span>{localCartItems.length}</span>
        {isOpen && (
          <div className="cart-container">
            {localCartItems.map((item, index) => (
              <div key={index}>
                {item.title}
                <button onClick={() => deleteFromCart(item.id)}>Delete</button>
              </div>
            ))}
            <Link to="/checkout">CHECKOUT</Link>
          </div>
        )}
      </div>
    </>
  );
}
