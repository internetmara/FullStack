import * as OrderAPIUTIL from '../utils/order_util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER_';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

export const receiveOrders = payload => (
  {
    type: RECEIVE_ORDERS,
    payload
  }
)

export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
})


export const removeOrder = order => ({
  type: DELETE_ORDER,
  order
})


export const fetchOrders = () => dispatch => (
  OrderAPIUTIL.fetchOrders()
    .then(payload => dispatch(receiveOrders(payload)))
)

export const fetchOrder = (orderId) => dispatch => {
  return (
    OrderAPIUTIL.fetchOrder(orderId)
      .then(order => dispatch(receiveOrder(order)))

  )
}

export const createOrder = order => dispatch => (
  OrderAPIUTIL.createOrder(order)
    .then(createdOrder => dispatch(receiveOrder(createdOrder)))
)

export const deleteOrder = orderId => dispatch => (
  OrderAPIUTIL.deleteOrder(orderId)
    .then(order => dispatch(removeOrdertem(order)))
)

export const updateOrder = orderId => dispatch => {
  return (
    OrderAPIUTIL.updateOrder(orderId)
      .then(orderId => dispatch(receiveOrder(orderId)))
  )
}