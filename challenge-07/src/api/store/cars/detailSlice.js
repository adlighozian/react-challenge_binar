import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDetailCars } from '../../service/cars';

export const getDetail = createAsyncThunk('cars/getDetail', async (id) => {
  try {
    const res = await fetchDetailCars(id);
    return res;
  } catch (error) {
    throw new Error(error?.message ?? 'Get detail failed');
  }
});

const initialState = {
  detail: [],
  isLoading: false,
  isError: null,
};

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetail.pending]: (state) => {
      state.isLoading = true;
      state.detail = [];
      state.isError = null;
    },
    [getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
      state.isError = null;
    },
    [getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.detail = [];
      state.isError = action.error.message;
    },
  },
});

const { action, reducer } = detailSlice;
export default reducer;
