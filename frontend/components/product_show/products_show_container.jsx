import React from 'react';
import ProductsShow from './products_show';
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow);
