import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constant';

export const getProductThunk = createAsyncThunk(
  ASYNC_ROUTES.GET_PRODUCT,
  async (_, thunkApi) => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error instanceof Error ? error.message : 'Something went wrong',
      );
    }
  },
);
