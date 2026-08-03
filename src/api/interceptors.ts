import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './axios';

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      console.log('✅ Token Expired');

      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem('refreshToken');

        if (!refreshToken) {
          throw new Error('Refresh Token not found');
        }

        const response = await axios.post(
          'https://dummyjson.com/auth/refresh',
          {
            refreshToken,
            expiresInMins: 30,
          },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        console.log('Refresh Failed');

        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
