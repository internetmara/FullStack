import React from 'react';
import NavBar from '../home/nav-bar';
import DispensaryShowItem from './dispensary_show_item';

const DispensaryShow = ({ dispensary }) => {
  return (
    <div className="show-page">
      <NavBar />
      <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
      <DispensaryShowItem dispensary={dispensary} />
    </div>
  );
};

export default DispensaryShow;