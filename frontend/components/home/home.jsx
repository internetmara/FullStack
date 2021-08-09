import React from 'react';
import DispensaryIndexContainer from '../dispensary_index/dispensary_index_container';
import NavBar from './nav-bar';

export default () => (
  <div className="home">
    <NavBar />
    <DispensaryIndexContainer />
  </div>
)