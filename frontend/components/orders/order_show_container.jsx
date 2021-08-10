import { connect } from 'react-redux';
import { fetchOrder } from '../../actions/order_actions';
import { selectOrder } from '../../reducers/selectors';
import OrderShow from './order_show';

const mSTP = (state, { match }) => {
  const orderId = parseInt(match.params.orderId);
  const order = selectOrder(state.entities, orderId);
  return {
    orderId,
    order,
  };
};

const mDTP = dispatch => ({
  fetchOrder: id => dispatch(fetchOrder(id))
});

export default connect(mSTP, mDTP)(OrderShow);
