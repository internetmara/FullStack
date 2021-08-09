import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import home from "./home/home";
import { Link, Route, Switch } from "react-router-dom";
import DispensaryShowContainer from "./dispensary_show/dispensary_show_container";
import OrderShowContainer from "./orders/order_show_container";

const App = (order) => (
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
        <div className="actions"><Link to={`/orders/${order.id}`}><i className="fa fa-shopping-cart" id="cart" /></Link>
        <GreetingContainer />
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={home} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
        <Route exact path="/dispensaries/:dispensaryId" component={DispensaryShowContainer} />
        {/* <Route exact path="/orders/:orderId" component={OrderShowContainer} /> */}
      </Switch>
  </div>
);

export default App;
