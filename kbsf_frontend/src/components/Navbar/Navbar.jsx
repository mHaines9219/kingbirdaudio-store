import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Cart from '../Cart/Cart';

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/category/protools" className="cat-link">
        PRO TOOLS
      </Link>
      <Link to="/category/flstudio" className="cat-link">
        FL STUDIO
      </Link>
      <Link to="/category/logic" className="cat-link">
        LOGIC
      </Link>
      <Link to="/category/ableton" className="cat-link">
        ABLETON
      </Link>
      <Link to="/category/bandlab" className="cat-link">
        BANDLAB
      </Link>

      <Link to="/" className="cat-link" id="navbar-home-btn">
        HOME
      </Link>
      <Cart />
    </div>
  );
}
