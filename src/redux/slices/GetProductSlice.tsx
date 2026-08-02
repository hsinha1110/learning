import { createSlice } from '@reduxjs/toolkit';
import { getProductThunk } from '../thunk/getProductThunk';

const initialState = {
  GetProducts: [],
  error: null,
  loading: false,
} as any;

export const GetProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.GetProducts = action.payload.products;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default GetProductSlice.reducer;
