export const RECEIVE_DISPENSARIES = 'RECEIVE_DISPENSARIES';
export const RECEIVE_DISPENSARY = 'RECEIVE_DISPENSARY';
import { getDispensaries, getDispensary } from '../utils/dispensaries_util';


const receiveDispensaries = dispensaries => ({
  type: RECEIVE_DISPENSARIES,
  dispensaries
});

const receiveDispensary = payload => ({
  type: RECEIVE_DISPENSARY,
  dispensary: payload.dispensary,
  products: payload.products
});

export const fetchDispensaries = () => dispatch => {
  return getDispensaries()
    .then(dispensaries => dispatch(receiveDispensaries(dispensaries)));
};

export const fetchDispensary = id => dispatch => (
  getDispensary(id).then(payload => {
    dispatch(receiveDispensary(payload))
  })
);