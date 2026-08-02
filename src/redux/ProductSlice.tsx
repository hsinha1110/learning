import { createSlice } from '@reduxjs/toolkit';
import { getProductThunk } from './thunk/getProductThunk';

const initialState = {
  Product: [],
  error: null,
  loading: false,
  page: 1,
  total: 0,
} as any;

export const ProductSlice = createSlice({
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
        const result = [...state.Product];
        for (const item of action.payload.products) {
          const exist = result.find((p: any) => p.id === item.id);
          if (!exist) {
            result.push(item);
          }
        }
        state.Product = result;
        state.total = action.payload.total;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export default ProductSlice.reducer;
