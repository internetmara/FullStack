import React from 'react';
import DispensariesShow from './dispensaries_show';
import { fetchDispensaries } from '../../actions/dispensary_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    dispensaries: Object.values(state.entities.dispensaries)
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchDispensaries: () => dispatch(fetchDispensaries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DispensariesShow);
