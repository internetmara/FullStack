import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <h1 align="center">Welcome to HashMaps where we tell <u>you</u> where to buy the devil's jazz lettuce!! !!! !</h1>
    <h2>Decriminalize it! End the drug war now!</h2>
    <h3 align="right">I'm high as a mfing kite baybeeeee</h3>
    <GreetingContainer/>

    <Route path="/login" component={LogInFormContainer} />
    <Route path="/signup" component={SignUpFormContainer} />
    <h4 align="center">Give job now give give!! give!!!</h4>
    <h5 align="center"><i>~ ~ ~ Sativa to change the things I can, and indica to accept the things I cannot. ~ ~ ~</i></h5>
  </div>
);

export default App;
