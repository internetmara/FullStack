import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import home from "./home/home";
import dispensary_index_container from "./dispensary/dispensary_index_container";

const App = () => (
  <div>
    <AuthRoute exact path="/" component={home} />
    <h2>Decriminalize it! End the drug war now! 🙅🚔⛔️</h2>
    <h3 align="right">I'm high as a mfing kite baybeeeee</h3>
    <GreetingContainer/>

    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <h4 align="center">Give job now give give!! give!!!</h4>
    <h5 align="center"><i>~ ~ ~ Sativa to change the things I can, and indica to accept the things I cannot. ~ ~ ~</i></h5>
    <ProtectedRoute path="/dispensaries" component={dispensary_index_container} />
  </div>
);

export default App;
