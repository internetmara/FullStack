import { RECEIVE_DISPENSARY } from '../actions/dispensary_actions';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../actions/product_actions';

export default (state = {}, action) => {
  const products = {};
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach(product => {
        products[product.id] = product;
      });
      return products;
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    case RECEIVE_DISPENSARY:
      action.products.forEach(product => {
        products[product.id] = product;
      });
      return products;
    default:
      return state;
  }
}
