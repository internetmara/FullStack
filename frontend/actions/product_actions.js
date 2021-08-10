export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
import { getProducts, getProduct } from '../utils/products_util';


const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const fetchProducts = () => dispatch => {
  return getProducts()
    .then(products => dispatch(receiveProducts(products)));
};

export const fetchProduct = id => dispatch => (
  getProduct(id).then(payload => (
    dispatch(receiveProduct(payload))
  ))
);