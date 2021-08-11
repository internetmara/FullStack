import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import home from "./home/home";
import { Link, Route, Switch } from "react-router-dom";
import DispensaryShowContainer from "./dispensary_show/dispensary_show_container";
import OrderShowContainer from "./orders/order_show_container"
import ProductShowContainer from "./product_show/product_show_container"
// import TopBarContainer from "./top-bar/top-bar_container";
import TopBarItem from "./top-bar/top-bar_item";

const App = () => (
  <div>
    <TopBarItem/>
    <Switch>
      <Route exact path="/" component={home} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/dispensaries/:dispensaryId" component={DispensaryShowContainer} />
      <AuthRoute exact path="/orders/:orderId" component={OrderShowContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
    </Switch>
  </div>
);

export default App;
