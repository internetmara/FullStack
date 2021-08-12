import React from 'react';
import { Link } from 'react-router-dom';

export default ({ }) => {
  return (
    <div className="navbar">
      <a href="https://weedmaps.com/">Order online</a>
      <Link to="/orders">Cart</Link>
      <Link to="/dispensaries">Dispensaries</Link>
      {/* <Link to="/products">Products</Link> */}
      <Link to="/maps">Maps</Link>
      <a href="http://www.linkedin.com/in/marafinkel">About</a>
    </div>
  );
}


