import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllCars } from "../actions/cocktailAction";

export const getCocktail = createAsyncThunk("cocktail/getCocktail", async () => {
  try {
    const res = await fetchAllCars();
    return res;
  } catch (error) {
    throw new Error(error?.message ?? "Get cocktail failed");
  }
});

const initialState = {
  cars: [],
  isLoading: false,
  isError: null,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers: {
    [getCocktail.pending]: (state) => {
      state.isLoading = true;
      state.cars = [];
      state.isError = null;
    },
    [getCocktail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cars = action.payload;
      state.isError = null;
    },
    [getCocktail.rejected]: (state, action) => {
      state.isLoading = false;
      state.cars = [];
      state.isError = action.error.message;
    },
  },
});

const { action, reducer } = cocktailSlice;
export default reducer;
