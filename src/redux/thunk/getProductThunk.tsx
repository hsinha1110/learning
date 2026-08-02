import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constant';

export const getProductThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCT,
  async ({ page, limit }: { page: number; limit: number }, thunkApi) => {
    try {
      const skip = (page - 1) * limit;

      console.log('Page:', page);
      console.log('Skip:', skip);

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );

      console.log('Status:', response.status);

      const data = await response.json();

      console.log('API Data:', data);

      return data;
    } catch (error) {
      console.log('API Error:', error);

      return thunkApi.rejectWithValue(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    }
  },
);
