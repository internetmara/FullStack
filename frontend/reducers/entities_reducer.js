import { combineReducers } from "redux";
import dispensariesReducer from "./dispensaries_reducer"
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  dispensaries: dispensariesReducer
});

export default entitiesReducer;