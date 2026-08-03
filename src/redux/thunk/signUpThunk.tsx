import { createAsyncThunk } from '@reduxjs/toolkit';
import { ASYNC_ROUTES } from '../constant';
import axiosInstance from '../../api/axios';
import axios from 'axios';

export const signUpThunk = createAsyncThunk(
  ASYNC_ROUTES.SIGN_UP,
  async (payload: any, thunkApi) => {
    try {
      const response = await axiosInstance.post('/users/add', payload);

      console.log('Response:', response.data);

      return response.data;
    } catch (error: any) {
      console.log(error);

      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);
