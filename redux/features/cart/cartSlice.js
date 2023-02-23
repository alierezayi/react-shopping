import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const addItemsHandler = (state, action) => {
  const newItem = { ...action.payload, quantity: 1 };

  const existingItem = state.cartItems.find(
    (item) => item.slug === newItem.slug
  );

  const cartItems = existingItem
    ? [...state.cartItems]
    : [...state.cartItems, newItem];
  // const cartItems = existingItem
  //   ? state.cartItems.map((item) =>
  //       item.title === existingItem.title ? newItem : item
  //     )
  //   : [...state.cartItems, newItem];

  return {
    ...state,
    cartItems,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: addItemsHandler,
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
