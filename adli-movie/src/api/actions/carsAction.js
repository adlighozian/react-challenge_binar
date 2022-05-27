import { GET_CARS, CARS_ERROR } from "../types";
import axios from "axios";

export const getCars = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://rent-cars-api.herokuapp.com/admin/car`
    );

    dispatch({
      type: GET_CARS,
      payload: res.car,
    });
  } catch (e) {
    dispatch({
      type: CARS_ERROR,
      payload: console.log(e),
    });
  }
};
