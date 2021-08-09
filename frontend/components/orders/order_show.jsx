import React from 'react';
import NavBar from '../home/nav-bar';
import OrderShowItem from './order_show_item';

const OrderShow = ({ order }) => {
  return (
    <div className="show-page">
      <NavBar />
      <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
      <OrderShowItem key={`order${order.id}`} order={order} />
    </div>
  );
};

export default OrderShow;