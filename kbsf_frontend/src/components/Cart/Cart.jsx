import React, { useState } from 'react';
import ShoppingCartIcon from '../../assets/cart_icon.png';

export default function Cart({ cartItems }) {
  return (
    <div>
      <img src={ShoppingCartIcon} alt="Cart" />
      <span>{cartItems.length - 1}</span>
    </div>
  );
}
