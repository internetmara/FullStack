import React from 'react';
import NavBar from '../home/nav-bar';
import ProductShowItem from './product_show_item';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
      .then(() => this.props.fetchDispensary(this.props.product.dispensaryId));
    this.props.fetchOrders();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.productId !== this.props.match.params.productId) {
      this.props.getProduct(this.props.match.params.productId);
    }
  }

  addItem(newItem) {
    this.props.createOrder({
      user_id: this.props.currentUserId,
      product_id: newItem.id,
      quantity: 1
    })
    this.props.history.push('/shoppingcart');
    // window.location.reload(false);
  }

  addToCart(e) {
    e.preventDefault();

    if (this.props.currentUserId) {
      let productIdArray = this.props.userOrders.map(item => (
        item.product_id
      ))
      if (!productIdArray.includes(this.props.product.id)) {
        this.addItem(this.props.product);
      } else {
        return (
          alert('Product already in cart!')
        )
      }


    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const { product, dispensary } = this.props;
    console.log(this.props)
    if ((product === undefined) || (dispensary === undefined)) {
      return null
    }
    return (
      <div className="product-show-page">
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Save on weed today by buying before inflation goes up!</div >
        <ProductShowItem key={`product${product.id}`} product={product} dispensary={dispensary} />
      </div>
    );
  };
}

export default ProductShow;