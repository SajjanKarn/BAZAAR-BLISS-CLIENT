import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // check if product already exists in cart
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        // limit quantity to 10
        if (item.quantity < 10) {
          item.quantity += 1;
        }
      } else {
        state.products.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
