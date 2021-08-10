import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ product }) => {
  return (
    <div>
      <br />
      <Link to={`/products/${product.id}`}>
        <img className="product-img" src={product.url} />
        <h3>{product.name}</h3>
      </Link>
      <br />
    </div>
  );
}
