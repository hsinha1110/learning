import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axios';
import { ASYNC_ROUTES } from '../constant';

export const loginThunk = createAsyncThunk(
  ASYNC_ROUTES.LOGIN,
  async (payload: any, thunkApi) => {
    try {
      const response = await axiosInstance.post(
        '/auth/login',
        {
          username: payload.username,
          password: payload.password,
          expiresInMins: 1, 
        },
        {
          withCredentials: true,
        },
      );

      console.log('Login Response:', response.data);

      return response.data;
    } catch (error: any) {
      console.log('Status:', error.response?.status);
      console.log('Response:', error.response?.data);
      console.log(error.response?.status);
      console.log(error.response?.data);
      console.log(error.response?.config);
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  },
);
