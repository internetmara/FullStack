import React from 'react';
import NavBar from '../home/nav-bar';
import ProductShowItem from './product_show_item';
import Footer from './../footer/footer'

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  addItem = (newItem) => {
    createOrder({
      userId: currentUserId,
      productId: newItem.id,
      quantity: 1,
      dispensaryId: dispensary.id
    })
    history.push('/orders');
  }

  addToCart = (e) => {
    e.preventDefault();
    console.log(currentUserId)
    if (currentUserId) {
      let productIdArray = userOrders.map(item => (
        item.product_id
      ))
      if (!productIdArray.includes(product.id)) {
        addItem(product);
      } else {
        return (
          alert('Product already in cart!')
        )
      }
    } else {
      // history.push('/orders')
    }
  }

  
  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
      // .then(() => this.props.fetchDispensary(this.props.dispensaryId));
    this.props.fetchOrders();
    this.props.fetchOrder();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { product, dispensary, currentUserId, userOrders, history, newItem, createOrder } = this.props;
    console.log(this.props)
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