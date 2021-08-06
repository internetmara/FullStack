import React from 'react';
import DispensaryContainer from "../dispensary/dispensary_index_container";

export default () => (
  <div className="home">
    <div className="nav-bar">
      <a href="api/orders">Order online</a>&nbsp;&nbsp;
      <a href="api/dispensaries">Dispensaries</a>&nbsp;&nbsp;
      <a href="api/products">Products</a>&nbsp;&nbsp;
    </div>
    <DispensaryContainer />
  </div>
)

  // put me on the show page for dispensaries < div className = "order-banner" > <i className="fa fa-shopping-cart" /> & nbsp;& nbsp; Select a product to start your order!</div >
