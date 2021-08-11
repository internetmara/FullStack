import React from 'react';
import ProductsShowItem from './products_show_item';

class ProductsShow extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (this.props.products === null) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ul>
          <br />
          <h2 className="featured-products">Products</h2>
          <div className="products">
            {
              products.map(product => (
                <ProductsShowItem key={`product${product.id}`} product={product} />
              )
              )
            }
          </div>
        </ul>
      </div>
    )
  }
}

export default ProductsShow;
