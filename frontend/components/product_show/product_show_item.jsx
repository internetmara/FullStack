import React from 'react';


export default ({ product }) => {
  return (
    <div className="product-show">
      <div className="product-info">
        <img className="product-show-img" src={product.url} />

        <div className="product-show-info">
          <p className="product-name">{product.name}</p>
          <p className="product-type">{product.type}</p>

          <div className="product-sub-heading">
            <div className="stars">
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />
              <img className="stars" src="/images/icons/star.png" />&nbsp;5.0 (420)
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}