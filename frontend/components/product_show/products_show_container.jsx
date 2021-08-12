import React from 'react';
import ProductsShow from './products_show';
import { fetchProducts } from '../../actions/product_actions';
import { connect } from 'react-redux';
import { createOrder, fetchOrders } from '../../actions/order_actions';

const mapStateToProps = (state) => {
  return ({
    products: Object.values(state.entities.products)
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  createOrder: (order) => dispatch(createOrder(order)),
  fetchOrders: () => dispatch(fetchOrders())

});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow);
