import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {
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
          <br/>
          <h2 className="featured-products">Featured products</h2>
          <div className="products">
            {
              products.map(product => (
                <ProductIndexItem key={`product${product.id}`} product={product} />
              )
              )
            }
          </div>
        </ul>
      </div>
    )
  }
}

export default ProductIndex;
