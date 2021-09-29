import React from "react";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import home from "./home/home";
import { Link, Route, Switch } from "react-router-dom";
import DispensaryShowContainer from "./dispensary_show/dispensary_show_container";
import ProductShowContainer from "./product_show/product_show_container"
// import TopBarContainer from "./top-bar/top-bar_container";
import TopBarItem from "./top-bar/top-bar_item";
import DispensariesShowContainer from "./dispensary_show/dispensaries_show_container";
import NavBar from "./home/nav-bar";
import ProductIndexContainer from "./product_index/product_index_container";
import SimpleMap from "./map/map";
import OrderIndexContainer from '../components/orders/order_index_container';
import About from "./about/about";

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
      <Route exact path="/products" component={ProductIndexContainer} />
      <Route exact path="/maps" component={ SimpleMap } />
      <Route exact path='/orders' component={ OrderIndexContainer } />
      <Route exact path="/about" component={ About } />
    </Switch>
  </div>
);

export default App;
