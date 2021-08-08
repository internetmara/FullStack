import { RECEIVE_DISPENSARIES, RECEIVE_DISPENSARY } from '../actions/dispensary_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISPENSARIES:
      const dispensaries = {};
      action.dispensaries.forEach(dispensary => {
        dispensaries[dispensary.id] = dispensary;
      });
      return dispensaries;
    case RECEIVE_DISPENSARY:
      return Object.assign({}, state, { [action.dispensary.id]: action.dispensary });
    default:
      return state;
  }
}
