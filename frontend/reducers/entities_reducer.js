import { combineReducers } from "redux";
import dispensaryReducer from "./dispensary_reducer"
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  dispensaries: dispensaryReducer
});

export default entitiesReducer;