import React from 'react';
import ProductIndexItem from './product_index_item';
import Footer from '../footer/footer';

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    if (this.props.flag) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { products } = this.props;
    return (
        <div className="featured-products-container">
          <ul>
            <br/>
            <h2 className="featured-products">Featured products</h2>
            <div className="products">
              {
                products.map(product => (
                  <ProductIndexItem key={`product${product.id}`} product={product}/>
                )
                )
              }
            </div>
          </ul>
        <Footer/>
        </div>
    )
  }
}

export default ProductIndex;
