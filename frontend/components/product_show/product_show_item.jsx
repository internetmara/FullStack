import React from 'react'; 
import { Link } from 'react-router-dom';


export default ({ product, dispensary }) => {
  return (
    <div className="product-show">
      <div className="go-back"><Link to={`/dispensaries/${product.dispensaryId}`}><img className="mini-dispensary-img" src={dispensary.url} />&nbsp;{dispensary.name}</Link></div>
      <img className="product-show-img" src={product.url} />
      <h1 className="product-show-name">{product.name}</h1>
    </div>
  );
}