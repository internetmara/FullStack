import { combineReducers } from "redux";
import dispensaryReducer from "./dispensary_reducer"
import usersReducer from "./users_reducer";
import productReducer from "./product_reducer"
import orderReducer from "./order_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  dispensaries: dispensaryReducer,
  products: productReducer,
  orders: orderReducer
});

export default entitiesReducer;