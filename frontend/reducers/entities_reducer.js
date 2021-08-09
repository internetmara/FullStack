import { combineReducers } from "redux";
import dispensaryReducer from "./dispensary_reducer"
import usersReducer from "./users_reducer";
import orderReducer from "./order_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  dispensaries: dispensaryReducer,
  order: orderReducer
});

export default entitiesReducer;