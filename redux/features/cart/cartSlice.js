import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: { cartItems: [] },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );

      const cartItems = existingItem
        ? state.cart.cartItems.map((item) =>
            item.title === existingItem.title ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      return { ...state, cart: { ...state.cart, cartItems } };
    },
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
