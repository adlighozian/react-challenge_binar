import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./reducers/carsReducer";
import detailReducer from "./reducers/detailReducer";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    detail: detailReducer,
  },
});
