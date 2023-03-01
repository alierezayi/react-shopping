import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (items) => {
  const cartCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { cartCounter, totalPrice };
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

  state.cartItems = cartItems;

  const total = sumItems(state.cartItems);

  state.cartCounter = total.cartCounter;
  state.totalPrice = total.totalPrice;
};

const removeItemsHandler = (state, action) => {
  const newCartItems = state.cartItems.filter(
    (item) => item.slug !== action.payload.slug
  );

  state.cartItems = [...newCartItems];

  const total = sumItems(state.cartItems);

  state.cartCounter = total.cartCounter;
  state.totalPrice = total.totalPrice;
};

const increaseHandler = (state, action) => {
  const indexI = state.cartItems.findIndex(
    (item) => item.slug === action.payload.slug
  );
  state.cartItems[indexI].quantity++;

  const total = sumItems(state.cartItems);

  state.cartCounter = total.cartCounter;
  state.totalPrice = total.totalPrice;
};

const decreaseHandler = (state, action) => {
  const indexD = state.cartItems.findIndex(
    (item) => item.slug === action.payload.slug
  );
  state.cartItems[indexD].quantity--;

  const total = sumItems(state.cartItems);

  state.cartCounter = total.cartCounter;
  state.totalPrice = total.totalPrice;
};

const checkoutHandler = (state) => {
  state.checkout = true;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: addItemsHandler,
    removeItem: removeItemsHandler,
    increase: increaseHandler,
    decrease: decreaseHandler,
    checkout: checkoutHandler,
  },
});

export const { addItem, removeItem, increase, decrease, checkout } = cartSlice.actions;

export default cartSlice.reducer;
