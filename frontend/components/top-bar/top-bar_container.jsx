import { connect } from 'react-redux';
import { fetchSession } from '../../actions/session_actions';
import { selectSession } from '../../reducers/selectors';
import TopBarItem from './top-bar_item';

const mSTP = (state, { match }) => {
  const sessionId = parseInt(match.params.sessionId);
  const session = selectSession(state.entities, sessionId);
  return {
    sessionId,
    session,
  };
};

const mDTP = dispatch => ({
  fetchSession: id => dispatch(fetchSession(id))
});

export default connect(mSTP, mDTP)(TopBarItem);
