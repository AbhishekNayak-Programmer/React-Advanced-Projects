import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //Payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //Payload = pizzaId
      state.cart = state.cart.filter((el) => el.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //Payload = pizzaId
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice += item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //Payload = pizzaId
      const item = state.cart.find((el) => el.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice -= item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
};

export const getTotalCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};
