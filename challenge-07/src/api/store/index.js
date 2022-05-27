import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import detailReducer from './cars/detailSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    detail: detailReducer,
  },
});