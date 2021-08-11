import React from 'react';
import NavBar from '../home/nav-bar';
import ProductShowItem from './product_show_item';

class ProductShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.productId)
      .then(() => this.props.fetchDispensary(this.props.product.dispensaryId));
  }

  render() {
    const { product, dispensary } = this.props;
    console.log(this.props)
    if ((product === undefined) || (dispensary === undefined)) {
      return null
    }
    return (
      <div className="product-show-page">
        <NavBar />
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Save on weed today by buying before inflation goes up!</div >
        <ProductShowItem key={`product${product.id}`} product={product} dispensary={dispensary} />
      </div>
    );
  };
}

export default ProductShow;