import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (items) => {
  const cartCounter = items.reduce((total, item) => total + item.quantity, 0);

  return { cartCounter };
};

const addItemsHandler = (state, action) => {
  const newItem = { ...action.payload, quantity: 1 };

  const existingItem = state.cartItems.find(
    (item) => item.slug === newItem.slug
  );

  // const cartItems = existingItem
  //   ? [...state.cartItems]
  //   : [...state.cartItems, newItem];

  const cartItems = existingItem
    ? state.cartItems.map((item) =>
        item.title === existingItem.title ? newItem : item
      )
    : [...state.cartItems, newItem];

  return {
    ...state,
    cartItems,
    ...sumItems(state.cartItems),
  };
};

const removeItemsHandler = (state, action) => {};

const increaseHandler = (state, action) => {};

const decreaseHandler = (state, action) => {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addItemsHandler,
    removeItem: removeItemsHandler,
    increase: increaseHandler,
    decrease: decreaseHandler,
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
