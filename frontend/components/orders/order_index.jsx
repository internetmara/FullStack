import React from 'react';
import { Link } from 'react-router-dom';
import PopupCheckout from './popup_checkout';
import PopupEmptyCheckout from './popup_emptycheckout';
import Footer from '../footer/footer';
import OrderIndexItem from './order_index_item'

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showPopupCheckout: false,
      showPopupEmptyCheckout: false
    }

    this.inOrder = this.inOrder.bind(this);
    this.emptyOrder = this.emptyOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.sumOrderTotal = this.sumOrderTotal.bind(this);
    this.sumTotal = this.sumTotal.bind(this);
    this.togglePopUpCheckout = this.togglePopUpCheckout.bind(this);
    this.togglePopUpEmptyCheckout = this.togglePopUpEmptyCheckout.bind(this);

    this.clearOrder = this.clearOrder.bind(this);
  }

  togglePopUpCheckout() {
    this.setState({
      showPopupCheckout: !this.state.showPopupCheckout
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

  // sumOrderTotal() {
  //   let orderQuantity = Object.keys(this.props.orders);
  //   let total = 0;

  //   let totalProductsPrice = orderQuantity.map(Id => {
  //     // let productId = this.props.orders[Id].product_id; //products object product id
  //     total = total + this.props.orders.prodPrice * this.props.orders.quantity;
  //     return total;
  //   })

  //   return total;
  // }

  sumTotal() {
    let total = 0;
    total = total + this.props.orders.prodPrice * this.props.orders.quantity;
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
    // const currentOrders = Object.values(this.props.orders);
    const currentOrders = [this.props.orders]; //should be an array of orders
    return (
        <div className='orders-container'>
          <div className="order-left">
            {currentOrders.map((order, id) =>
              <OrderIndexItem
                key={id}
                dispo_name={order.dispoName}
                dispo_pic={order.dispoPic}
                prod_name={order.prodName}
                prod_size={order.prodSize}
                prod_price={order.prodPrice}
                quantity={order.quantity}
                prod_pic={order.prodPic}
                dispo_id={order.dispoId}
                prod_id={order.prodId}
              />)}
            </div>

          <div className='order-right'>
            <div className="order-summary">
            <div className='summary'>Summary</div>
            <div className='total'>
              <div className='total-header'>Order Total</div>
              <div className='total-price'>${this.sumTotal()}.00</div>
            </div>
            </div>
          <div className='checkout'>
            <button onClick={() => { this.togglePopUpCheckout(); }} className='checkoutButton'>Proceed to checkout</button>
          </div>
          </div>



          {this.state.showPopupCheckout ?
            <PopupCheckout closePopup={this.togglePopUpCheckout} clearOrder={this.clearOrder} /> : null}

        {/* <button className='delete-button' onClick={() => { this.props.deleteOrder(Id); }}>Remove</button> */}
      </div>
    )
  }

  emptyOrder() {
    return (
      <div>
        <div className='empty-orders-container'>
          {/* <div className='order-left'> */}
            <img className="empty-cart-pic" src="images/icons/jar.png"/>
            <br/>
            <div className='order-header1'>Your Order Is Empty!</div>
            <div className="empty-order-text">
              <p>Don't wait to bake. Add items to your cart and enjoy your weed today.</p>
            {/* </div> */}
          </div>

          {/* <div className='order-right'>
            <div className='order-summary'>
              <div className="summary">Summary</div>
            <div className='total'>
              <div className='total-header'>Total</div>
              <div className='total-price'>$0.00</div>
            </div>
            </div>
              <div className='checkout'> */}
                <button onClick={() => { this.togglePopUpEmptyCheckout() }} className='shopNowButton'>Shop Now</button>
                {/* </div> */}
            {this.state.showPopupEmptyCheckout ?
              <PopupEmptyCheckout closePopup={this.togglePopUpEmptyCheckout} /> : null}
          {/* </div> */}
        </div>
        <Footer/>
      </div>
    )
  }

  render() {
    return (this.props.orders.length === 0 || this.props.currentUserId === null) ? this.emptyOrder() : this.inOrder();
  }
}

export default Orders;