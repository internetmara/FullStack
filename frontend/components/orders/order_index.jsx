import React from 'react';
import { Link } from 'react-router-dom';
import PopupCheckout from './popup_checkout';
import PopupVenmo from './popup_venmo';
import PopupEmptyCheckout from './popup_emptycheckout';

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupCheckout: false,
      showPopupVenmo: false,
      showPopupEmptyCheckout: false
    }

    this.inOrder = this.inOrder.bind(this);
    this.emptyOrder = this.emptyOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sumOrderTotal = this.sumOrderTotal.bind(this);
    this.sumTotal = this.sumTotal.bind(this);

    this.togglePopUpCheckout = this.togglePopUpCheckout.bind(this);
    this.togglePopUpVenmo = this.togglePopUpVenmo.bind(this);
    this.togglePopUpEmptyCheckout = this.togglePopUpEmptyCheckout.bind(this);

    this.clearOrder = this.clearOrder.bind(this);
  }

  togglePopUpCheckout() {
    this.setState({
      showPopupCheckout: !this.state.showPopupCheckout
    })
  }

  togglePopUpVenmo() {
    this.setState({
      showPopupVenmo: !this.state.showPopupVenmo
    })
  }

  togglePopUpEmptyCheckout() {
    this.setState({
      showPopupEmptyCheckout: !this.state.showPopupEmptyCheckout
    })
  }

  componentDidMount() {
    this.props.fetchOrders();
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.userOrders).length !== Object.values(this.props.userOrders).length) {
      this.props.fetchOrders();
    }
  }

  sumOrderTotal() {
    let orderQuantity = Object.keys(this.props.orders);
    let total = 0;

    let totalProductsPrice = orderQuantity.map(Id => {
      let productId = this.props.orders[Id].product_id; //products object product id
      total = total + this.props.products[productId].price * this.props.orders[Id].quantity;
      return total;
    })

    return total;
  }

  sumTotal(Id, productId) {
    let total = 0;
    total = total + this.props.products[productId].price * this.props.orders[Id].quantity;
    return total;

  }

  clearOrder() {
    let orderQuantity = Object.keys(this.props.orders);
    orderQuantity.map(Id => {
      this.props.deleteOrder(Id);
    })
  }

  handleChange(idx) {
    event.preventDefault();
    let updated = { id: idx, quantity: event.target.value };
    this.props.updateOrder(updated);
  }

  inOrder() {
    let orderIds = Object.keys(this.props.orders);//these are order  ids 
    let fullProducts = orderIds.map(Id => {
      let productId = this.props.orders[Id].product_id;

      return (
        <div key={Id} className='order-product-container'>
          <div className='order-image-wrapper'>
            <Link to={`/products/${productId}`}><img className='order-image' src={this.props.products[productId].photoUrls ? this.props.products[productId].photoUrls[0] : null} ></img></Link>
          </div>
            <div className='order-product-price'>
              <div className='order--name'>{this.props.products[productId].name}</div>
              <div className='order--price'>${this.sumTotal(Id, productId)}.00</div>
            <div className='size-quantity-box'>
              <div className='size-order'>Size  {this.props.products[productId].size}</div>

              <div className='quantity-select' > Quantity &nbsp;
              </div>
            </div>

            <button className='delete-button' onClick={() => { this.props.deleteOrder(Id); }}>Remove</button>
          </div>
        </div>
      )
    })
    return (
      <div className='order-s-container'>
        <div className='order-left'>
          <div className='order-header'>Order</div>
          <div className='order-products'>{fullProducts}</div>
        </div>

        <div className='order-right'>
          <div className='summary'>Summary</div>
          <div className='total'>
            <div className='total-header'>Total</div>
            <div className='total-price'>${this.sumOrderTotal()}.00</div>
          </div>

          <div className='checkout'><button onClick={() => { this.togglePopUpCheckout(); }} className='checkoutButton'>Checkout</button></div>
          <div className='paypal'><button onClick={this.togglePopUpVenmo} className='checkout-paypal'><i className='fab fa-paypal fa-3x' style={{ color: 'blue' }}></i></button></div>
          {this.state.showPopupCheckout ?
            <PopupCheckout closePopup={this.togglePopUpCheckout} clearOrder={this.clearOrder} /> : null}
          {this.state.showPopupVenmo ?
            <PopupVenmo closePopup={this.togglePopUpVenmo} /> : null}
        </div>
      </div>
    )
  }

  emptyOrder() {
    return (
      <div className='order-s-container'>
        <div className='Order-left1'>
          <div className='Order-header1'>Your Order Is Empty</div>
        </div>

        <div className='Order-right'>
          <div className='summary'>Summary</div>

          <div className='total'>
            <div className='total-header'>Total</div>
            <div className='total-price'>$0.00</div>
          </div>

          <div className='checkout'><button onClick={() => { this.togglePopUpEmptyCheckout() }} className='checkoutButton'>Checkout</button></div>
          <div className='paypal'><button onClick={this.togglePopUpVenmo} className='checkout-paypal'><i className='fab fa-paypal fa-3x' style={{ color: 'blue' }}></i></button></div>

          {this.state.showPopupEmptyCheckout ?
            <PopupEmptyCheckout closePopup={this.togglePopUpEmptyCheckout} /> : null}
          {this.state.showPopupVenmo ?
            <PopupVenmo closePopup={this.togglePopUpVenmo} /> : null}
        </div>
      </div>
    )
  }

  render() {
    return (this.props.userOrders.length === 0 || this.props.currentUserId === null) ? this.emptyOrder() : this.inOrder();
  }
}

export default Orders;