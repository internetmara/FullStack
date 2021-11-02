import React from 'react';
import NavBar from '../home/nav-bar';
import ProductShowItem from './product_show_item';
import Footer from './../footer/footer'

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    // this.addToCart = this.addToCart.bind(this);
    // this.addItem = this.addItem.bind(this);
  }

  
  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
      .then(() => this.props.fetchDispensary(this.props.product.dispensaryId));
    this.props.fetchOrders();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { product, dispensary, currentUserId, userOrders, history, newItem, createOrder } = this.props;
    if ((product === undefined) || (dispensary === undefined)) {
      return null
    }
    return (
      <div className="product-show-page">
        <div className="order-banner"> <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Save on weed today by buying before inflation goes up!</div >
        <ProductShowItem key={`product${product.id}`} product={product} dispensary={dispensary} currentUserId={currentUserId} userOrders={userOrders} history={history} createOrder={createOrder} />
        <Footer/>
      </div>
    );
  };
}

export default ProductShow;