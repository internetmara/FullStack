import React from 'react';
import DispensaryShowItem from './dispensary_show_item';
import ProductIndexContainer from './../product_index/product_index_container'

class DispensaryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDispensary(this.props.dispensaryId);
  }

  render() {
    const { dispensary } = this.props;
    if (dispensary === undefined ) {
      return null
    }
    return (
      <div className="dispensary-show-page">
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
        <DispensaryShowItem key={`dispensary${dispensary.id}`} dispensary={dispensary} />
        <ProductIndexContainer />
      </div>
    );
  };
}

export default DispensaryShow;