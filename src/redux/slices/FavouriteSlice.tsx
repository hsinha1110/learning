import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInfo } from '../../types';

interface FavouriteState {
  favourites: ProductInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: FavouriteState = {
  favourites: [],
  loading: false,
  error: null,
};

const FavouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<ProductInfo>) => {
      const exists = state.favourites.find(
        item => item.id === action.payload.id,
      );

      if (exists) {
        state.favourites = state.favourites.filter(
          item => item.id !== action.payload.id,
        );
      } else {
        state.favourites.push(action.payload);
      }
    },

    clearFavourite: state => {
      state.favourites = [];
    },
  },
});

export const { toggleFavourite, clearFavourite } = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
