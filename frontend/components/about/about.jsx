import React from 'react';
import Footer from '../footer/footer';

export default ({about}) => (
  <div className="about">
    <div className="about-text">Welcome to HashMaps, a clone of&nbsp;<a href="https://weedmaps.com/">Weedmaps</a>!</div>
    <div className="bio">
      <a href="https://internetmara.github.io/"><img className="bio-pic" src="images/Mara.jpeg"/></a>
      <br/>
      <p className="bio-text">Hi, my name is Mara Finkel and I am a fullstack developer. 
      <br/>
      <br/>
      I really enjoy working working with frontend frameworks such as React, and backend frameworks such as Rails. My favorite languages to code in are JavaScript and Ruby. 
      <br/>
      <br/>
      I live in California's Bay Area with my dog Jellybean and have spent the last half-decade educating people and patients on the many complex and disparate issues within the cannabis industry.</p>
    </div>
    <Footer/>
  </div>
)