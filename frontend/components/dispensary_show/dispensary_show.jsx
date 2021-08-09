import React from 'react';
import NavBar from '../home/nav-bar';
import DispensaryShowItem from './dispensary_show_item';

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
      <div className="show-page">
        <NavBar />
        <div className="order-banner" > <i className="fa fa-shopping-cart" />&nbsp;&nbsp; Select a product to start your order!</div >
        <DispensaryShowItem key={`dispensary${dispensary.id}`} dispensary={dispensary} />
      </div>
    );
  };
}

export default DispensaryShow;