import { connect } from 'react-redux';
import { fetchOrders, fetchOrder, deleteOrder, createOrder, updateOrder } from '../../actions/order_actions';
import {fetchDispensaries, fetchDispensary } from '../../actions/dispensary_actions';
import Orders from './order_index';
import { selectProductsInOrder } from '../../reducers/selectors';

const mapSTP = ({ session, entities: { orders, products, dispensaries } }) => ({
  userOrders: selectProductsInOrder(orders, products),
  products: products,
  orders: Object.values(orders),
  dispensaryies: dispensaries,
  currentUserId: session.id
})

const mapDTP = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  createOrder: (order) => dispatch(createOrder(order)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
  updateOrder: (updatedOrder) => dispatch(updateOrder(updatedOrder)),
  fetchOrder: (orderId) => dispatch(fetchOrder(orderId)),
  fetchDispensary: (id) => dispatch(fetchDispensary(id)),
  fetchDispensaries: () => dispatch(fetchDispensaries())
})

export default connect(mapSTP, mapDTP)(Orders);