import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { loadCart, saveCart } from "@/app/_utils/localStorage";

const preloadedState = {
  cart: loadCart() || { cartItems: [] },
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveCart(store.getState().cart);
});
