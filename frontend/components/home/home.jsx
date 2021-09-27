import React from 'react';
import DispensaryIndexContainer from '../dispensary_index/dispensary_index_container';
import NavBar from './nav-bar';
import Slider from './slider';
import Footer from '../footer/footer';

export default () => (
  <div className="home">
    <Slider />
    <DispensaryIndexContainer />
    <Footer/>
  </div>
)