import { connect } from 'react-redux';

import { fetchDispensary } from '../../actions/dispensary_actions';
import { selectDispensary } from '../../reducers/selectors';
import DispensaryShow from './dispensary_show';

const mSTP = (state, { match }) => {
  const dispensaryId = parseInt(match.params.dispensaryId);
  const dispensary = selectDispensary(state.entities, dispensaryId);
  return {
    dispensaryId,
    dispensary,
  };
};

const mDTP = dispatch => ({
  fetchDispensary: id => dispatch(fetchDispensary(id))
});

export default connect(mSTP, mDTP)(DispensaryShow);
