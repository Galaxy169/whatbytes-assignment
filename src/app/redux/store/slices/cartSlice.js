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

    
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
