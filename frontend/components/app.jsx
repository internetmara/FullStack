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
import DispensariesShowContainer from "./dispensary_show/dispensaries_show_container";
import NavBar from "./home/nav-bar";
import ProductsShowContainer from "./product_show/products_show_container";
import SimpleMap from "./map/map";

const App = () => (
  <div>
    <TopBarItem/>
    <NavBar />
    <Switch>
      <Route exact path="/" component={home} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
      <Route exact path="/dispensaries/:dispensaryId" component={DispensaryShowContainer} />
      <Route exact path="/dispensaries" component={DispensariesShowContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <Route exact path="/products" component={ProductsShowContainer} />
      <AuthRoute exact path="/orders/:orderId" component={OrderShowContainer} />
      <Route exact path="/maps" component={ SimpleMap} />
    </Switch>
  </div>
);

export default App;
