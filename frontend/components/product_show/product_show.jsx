import React from 'react';
import NavBar from '../home/nav-bar';
import ProductShowItem from './product_show_item';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId);
  }

  render() {
    const { product } = this.props;
    if (product === undefined) {
      return null
    }
    return (
      <div className="product-show-page">
        <NavBar />
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
        <ProductShowItem key={`product${product.id}`} product={product} />
      </div>
    );
  };
}

export default ProductShow;