import React, { useState } from 'react';
import ShoppingCartIcon from '../../assets/cart_icon.png';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <img
          src={ShoppingCartIcon}
          alt="Cart"
          onClick={() => setIsOpen(!isOpen)}
        />
        <span>{cartItems.length}</span>
        {isOpen && (
          <div className="cart-container">
            {cartItems.map((item, index) => (
              <>
                <div key={index}>{item.title}</div>
                <button>Delete</button>
              </>
            ))}
            <Link to="/checkout">CHECKOUT</Link>
          </div>
        )}
      </div>
    </>
  );
}
