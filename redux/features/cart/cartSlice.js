import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = Cookies.get("cart")
  ? JSON.parse(Cookies.get("cart"))
  : {
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

  const { cartCounter, totalPrice } = sumItems(state.cartItems);

  Cookies.set(
    "cart",
    JSON.stringify({ ...state, cartItems, cartCounter, totalPrice })
  );

  state.cartCounter = cartCounter;
  state.totalPrice = totalPrice;
};

const removeItemsHandler = (state, action) => {
  const cartItems = state.cartItems.filter(
    (item) => item.slug !== action.payload.slug
  );

  state.cartItems = [...cartItems];

  const { cartCounter, totalPrice } = sumItems(state.cartItems);

  Cookies.set(
    "cart",
    JSON.stringify({ ...state, cartItems, cartCounter, totalPrice })
  );

  state.cartCounter = cartCounter;
  state.totalPrice = totalPrice;
};

const increaseHandler = (state, action) => {
  const indexI = state.cartItems.findIndex(
    (item) => item.slug === action.payload.slug
  );
  state.cartItems[indexI].quantity++;

  const { cartCounter, totalPrice } = sumItems(state.cartItems);

  Cookies.set(
    "cart",
    JSON.stringify({
      ...state,
      cartItems: [...state.cartItems],
      cartCounter,
      totalPrice,
    })
  );

  state.cartCounter = cartCounter;
  state.totalPrice = totalPrice;
};

const decreaseHandler = (state, action) => {
  const indexD = state.cartItems.findIndex(
    (item) => item.slug === action.payload.slug
  );
  state.cartItems[indexD].quantity--;

  const { cartCounter, totalPrice } = sumItems(state.cartItems);

  Cookies.set(
    "cart",
    JSON.stringify({
      ...state,
      cartItems: [...state.cartItems],
      cartCounter,
      totalPrice,
    })
  );

  state.cartCounter = cartCounter;
  state.totalPrice = totalPrice;
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

export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;

export default cartSlice.reducer;
