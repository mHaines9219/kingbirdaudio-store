import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/details">DETAILS</Link>
      <Link to="/">HOME</Link>
    </div>
  );
}
