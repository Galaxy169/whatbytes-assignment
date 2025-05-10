const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const isExist = state.cartItems.find((product) => product.id === item.id);
      if (isExist) {
        isExist.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((product) => product.id === id);
      if (item) item.quantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
