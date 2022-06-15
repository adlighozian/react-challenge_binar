import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./reducers/carsReducer";
import cocktailReducer from "./reducers/cocktailReducer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    cocktail: cocktailReducer,
  },
});
