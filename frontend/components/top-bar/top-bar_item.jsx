import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

export default ({ }) => {
  return (
    <div className="top-bar">
      <div className="hamburger">
        <a href="/">
          <div className="hamburger1"></div>
          <div className="hamburger2"></div>
          <div className="hamburger3"></div>
        </a>
      </div>
      <div className="logo"><a href="/"><img className="wm-logo" src="/images/white-logo.png" /></a></div>
      <div className="actions"><Link to={`/`}><i className="fa fa-shopping-cart" id="cart" /></Link>
        <GreetingContainer/>
      </div>
    </div>
  );
}