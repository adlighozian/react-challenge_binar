import { combineReducers } from "redux";
import contactReducer from "./contact";
import moviesReducer from "./movies";

const rootReducers =  combineReducers({
    contactReducer,
    moviesReducer
})

export default rootReducers