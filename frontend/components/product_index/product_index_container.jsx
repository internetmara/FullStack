import React from 'react';
import ProductIndex from './product_index';
import { fetchProducts } from '../../actions/product_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    products: Object.values(state.entities.products)
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);
