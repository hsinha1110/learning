import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
} as any;

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item: any) => item.id === action.payload.id,
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
        });
      }
    },
    removefromCart: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload,
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find((item: any) => item.id === action.payload);

      if (item) item.qty++;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((item: any) => item.id === action.payload);

      if (!item) return;

      if (item.qty > 1) {
        item.qty--;
      } else {
        state.items = state.items.filter(
          (item: any) => item.id !== action.payload,
        );
      }
    },
  },
});
export const { addToCart, removefromCart, increaseQty, decreaseQty } =
  CartSlice.actions;

export default CartSlice.reducer;
