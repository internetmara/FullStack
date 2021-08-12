import { connect } from 'react-redux';
import { fetchOrders, fetchOrder, deleteOrder, createOrder, updateOrder } from '../../actions/order_actions';
import Orders from './order_index';
import { selectProductsInOrder } from '../../reducers/selectors';

const mapSTP = ({ session, entities: { orders, products } }) => ({
  userOrders: selectProductsInOrder(orders, products),
  products: products,
  orders: orders,
  currentUserId: session.id
})

const mapDTP = dispatch => ({
  fetchOrders: () => dispatch(fetchOrders()),
  createOrder: (order) => dispatch(createOrder(order)),
  deleteOrder: (orderId) => dispatch(deleteOrder(orderId)),
  updateOrder: (updatedOrder) => dispatch(updateOrder(updatedOrder)),
  fetchOrder: (orderId) => dispatch(fetchOrder(orderId))
})

export default connect(mapSTP, mapDTP)(Orders);