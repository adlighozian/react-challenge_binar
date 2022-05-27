import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import carsReducer from "./usersReducer";

export default combineReducers({
  users: userReducer,
  cars: carsReducer,
});
