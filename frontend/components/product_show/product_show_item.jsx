import React from 'react'; 
import { Link } from 'react-router-dom';
import QuantitySelector from '../quantity_selector/quantity_selector';


export default ({ product, dispensary }) => {
  
  return (
    <div className="product-show">
      <div className="go-back">
        <Link to={`/dispensaries/${product.dispensaryId}`}>
          <div className="product-icon">
            <img src="/images/icons/left-arrow.png" />
          </div>
          <div className="mini-dispensary-img">
            <img src={dispensary.url} />
          </div>
          <div className="product-dispensary-name">
          &nbsp;{dispensary.name}
          </div>
        </Link>
      </div>
      <div className="show-border">
        <div className="product-show-details">
          
          <div className="show-img-border">
            <img className="product-show-img" src={product.url} />
          </div>

          <div className="product-show-text">
            <a className="product-show-category" href="/products">{product.category}</a>
            <h1 className="product-show-name">{product.name}</h1>
            
            <div className="pickup-at">
              
              <div className="small-dispensary-img">
                <img src={dispensary.url} />
              </div>
              Pickup at {dispensary.name}
            </div>

            <div className="price-box">
              <div className="price">{product.price}</div>
              <div className="unit-size">{product.size}</div>
            </div>

            <div className="quantity">Quantity</div>
            <div className="quantity-selector">
              <QuantitySelector/>
            </div>

            <div className="button-box">
              <button className="add-to-cart" onClick={this.addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}