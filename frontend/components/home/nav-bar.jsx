import React from 'react';
import { Link } from 'react-router-dom';

export default ({ }) => {
  return (
    <div className="navbar">
      <Link to="/orders">Order online</Link>
      <Link to="/dispensaries">Dispensaries</Link>
      <Link to="/products">Products</Link>
      <Link to="/maps">Maps</Link>
      <Link to="/about">About</Link>
    </div>
  );
}


