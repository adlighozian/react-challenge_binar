import { GET_CARS } from "../types";

const initialState = {
  name: [],
  loading: true,
};

function cars(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        name: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
export default cars;
