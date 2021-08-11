import React from 'react';
import NavBar from '../home/nav-bar';
import OrderShowItem from './order_show_item';

class OrderShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchOrder(this.props.orderId);
  }

  render() {
    const { order } = this.props;
    if (order === undefined) {
      return null
    }
    return (
      <div className="show-page">
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
        <OrderShowItem key={`order${order.id}`} order={order} />
      </div>
    );
  };
}

export default OrderShow;