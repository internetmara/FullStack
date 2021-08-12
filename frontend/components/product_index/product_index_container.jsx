import React from 'react';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  
  const flag = (ownProps.match.path === "/products" );

  return ({
    products: Object.values(state.entities.products),
    flag
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductIndex));
