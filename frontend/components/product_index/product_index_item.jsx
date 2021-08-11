import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default ({ product }) => {
  return (
    <li>
      <br/>
      <div className="product-container">
        <Link to={`/products/${product.id}`}>
          <img className="product-index-img" src={product.url} />
          <h3 className="product-index-name">{product.name}</h3>
          <br/>
          <h3 className="product-index-category">Type: {product.category}</h3>
        </Link>
      </div>
      <br />
    </li>
  );
}
