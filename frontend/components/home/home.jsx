import React from 'react';
import DispensaryIndexContainer from "../dispensary_index/dispensary_index_container";

export default () => (
  <div className="home">
    <div className="nav-bar">
      <a href="https://weedmaps.com/">Order online</a>&nbsp;&nbsp;
      <a href="api/dispensaries">Dispensaries</a>&nbsp;&nbsp;
      <a href="api/products">Products</a>&nbsp;&nbsp;
      <a href="http://www.linkedin.com/in/marafinkel">About</a>&nbsp;&nbsp;
    </div>
    <DispensaryIndexContainer />
  </div>
)

  // put me on the show page for dispensaries < div className = "order-banner" > <i className="fa fa-shopping-cart" /> & nbsp;& nbsp; Select a product to start your order!</div >
