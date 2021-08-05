import { RECEIVE_DISPENSARIES, RECEIVE_SINGLE_DISPENSARY } from '../actions/dispensaries';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DISPENSARIES:
      const dispensaries = {};
      action.dispensaries.forEach(dispensary => {
        dispensaries[dispensary.id] = dispensary;
      });
      return dispensaries;
    case RECEIVE_SINGLE_DISPENSARY:
      return Object.assign({}, state, { [action.dispensary.id]: action.dispensary });
    default:
      return state;
  }
}
