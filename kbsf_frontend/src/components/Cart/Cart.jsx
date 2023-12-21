import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '../../assets/cart_icon.png';
import DeleteIcon from '../../assets/delete_icon.png';
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
      <div className={`cart-container ${isOpen ? 'open' : ''}`}>
        {!isOpen && (
          <>
            <img
              src={ShoppingCartIcon}
              alt="Cart"
              onClick={() => setIsOpen(!isOpen)}
            />
            <span>{localCartItems.length}</span>
          </>
        )}
        {isOpen && (
          <>
            <button onClick={() => setIsOpen(false)} className="collapse-btn">
              >
            </button>{' '}
            {/* Close button */}
            <div className="open-cart-divs">
              {localCartItems.map((item, index) => (
                <div key={index}>
                  <div className="cart-item">
                    {item.title} : ${item.price}
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className="delete-cart-btn"
                    >
                      <img src={DeleteIcon} alt="Delete"></img>
                    </button>
                  </div>
                </div>
              ))}
              <hr></hr>
              <div className="total-price">
                Total: $
                {localCartItems.reduce((total, item) => total + item.price, 0)}
              </div>
              <div className="checkout-btn-container">
                <Link to="/checkout" className="checkout-btn">
                  CHECKOUT
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
