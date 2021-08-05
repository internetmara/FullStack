export const RECEIVE_DISPENSARIES = 'RECEIVE_DISPENSARIES';
export const RECEIVE_SINGLE_DISPENSARY = 'RECEIVE_SINGLE_DISPENSARY';
import { getDispensaries } from '../utils/dispensaries_util';


const receiveDispensaries = dispensaries => ({
  type: RECEIVE_DISPENSARIES,
  dispensaries
});

const receiveSingleDispensary = dispensary => ({
  type: RECEIVE_SINGLE_DISPENSARY,
  dispensary
});

export const fetchDispensaries = () => dispatch => {
  return getDispensaries()
    .then(dispensaries => dispatch(receiveDispensaries(dispensaries)));
};