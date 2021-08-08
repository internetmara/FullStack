import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import home from "./home/home";
import { Route } from "react-router-dom";

const App = () => (
  <div>
      <div className="top-bar">
        <div className="hamburger">
          <a href="/">
            <div className="hamburger1"></div>
            <div className="hamburger2"></div>
            <div className="hamburger3"></div>
          </a>
        </div>
        <div className="logo"><a href="/"><img className="wm-logo" src="/images/white-logo.png" /></a></div>
        <div className="actions"><i className="fa fa-shopping-cart" id="cart" />
        <GreetingContainer />
        </div>
      </div>

    <AuthRoute exact path="/" component={home} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />  
  </div>
);

export default App;
