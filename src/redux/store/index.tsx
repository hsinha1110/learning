import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../slices/CartSlice';
import productReducer from '../slices/ProductSlice';
import getProductReducer from '../slices/GetProductSlice';
import favouriteReducer from '../slices/FavouriteSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    getProduct: getProductReducer,
    favourite: favouriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
