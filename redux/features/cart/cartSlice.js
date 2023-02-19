import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cartItems.map((item) =>
            item.title === existingItem.title ? newItem : item
          )
        : [...state.cartItems, newItem];

      return { ...state, cartItems };
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
