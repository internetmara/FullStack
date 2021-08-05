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
        <div className="hamburger"></div>
        <div className="logo"><a href="/"><img className="wm-logo" src="/images/white-logo.png" /></a></div>
        <div className="actions"><i className="fa fa-shopping-cart" id="cart" /></div>
      </div>
      <div className="nav-bar"></div>

    <AuthRoute exact path="/" component={home} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <GreetingContainer/>
    <h4 align="center">Decriminalize it! End the drug war now! 🙅🚔⛔️</h4>
    <h5 align="center"><i>~ ~ ~ Sativa to change the things I can, and indica to accept the things I cannot. ~ ~ ~</i></h5>
    
  </div>
);

export default App;
