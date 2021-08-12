import {RECEIVE_ORDERS, DELETE_ORDER, RECEIVE_ORDER} from '../actions/order_actions'

const orderReducer = (state={}, action) => {
    Object.freeze(state);
    

    switch (action.type) {
        case RECEIVE_ORDERS:
            return Object.assign({}, state, action.payload.orders);
        case RECEIVE_ORDER:
            return Object.assign({}, state, {[action.order.id]: action.order})
        case DELETE_ORDER:
            let newState = Object.assign({}, state);
            delete newState[action.order.id];
            return newState;
        default:
            return state;
    }
}

export default orderReducer;