export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
import { getOrders, getOrder } from '../utils/orders_util';

const receiveOrders = orders => ({
  type: RECEIVE_ORDERS,
  orders
});

const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const fetchOrders = () => dispatch => {
  return getOrders()
    .then(orders => dispatch(receiveOrders(orders)));
};

export const fetchOrder = id => dispatch => (
  getOrder(id).then(payload => (
    dispatch(receiveOrder(payload))
  ))
);