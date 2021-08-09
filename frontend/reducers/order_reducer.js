import { RECEIVE_ORDER } from '../actions/order_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ORDER:
      return Object.assign({}, state, { [action.order.id]: action.order });
    default:
      return state;
  }
}
