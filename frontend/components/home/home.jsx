import React from 'react';
import DispensaryIndexContainer from '../dispensary_index/dispensary_index_container';
import NavBar from './nav-bar';
import Slider from './slider';

export default () => (
  <div className="home">
    <NavBar />
    <Slider />
    <DispensaryIndexContainer />
  </div>
)