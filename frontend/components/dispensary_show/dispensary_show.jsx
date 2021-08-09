import React from 'react';
import NavBar from '../home/nav-bar';

const DispensaryShow = ({ dispensary, dispensaryId }) => {
  const dispensaries = {
    [dispensaryId]: dispensary
  };

  return (
    <div className="show-page">
      <NavBar />
      <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
    </div>
  );
};

export default DispensaryShow;
