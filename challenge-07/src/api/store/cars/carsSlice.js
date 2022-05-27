import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from '../../service/cars';

export const getCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const res = await fetchAllCars();
    return res;
  } catch (error) {
    throw new Error(error?.message ?? 'Get cars failed');
  }
});

const initialState = {
  cars: [],
  isLoading: false,
  isError: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [getCars.pending]: (state) => {
      state.isLoading = true;
      state.cars = [];
      state.isError = null;
    },
    [getCars.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cars = action.payload;
      state.isError = null;
    },
    [getCars.rejected]: (state, action) => {
      state.isLoading = false;
      state.cars = [];
      state.isError = action.error.message;
    },
  },
});

const { action, reducer } = carsSlice;
export default reducer;
