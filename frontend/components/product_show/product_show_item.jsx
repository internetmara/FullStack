import React from 'react';


export default ({ product }) => {
  return (
    <div className="product-show">
      <img className="product-show-img" src={product.url} />
      Hello! Products go here!
    </div>
  );
}