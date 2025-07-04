import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#f5f5f5' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/product">Product</Link>
    </nav>
  );
}

export default Navbar;
