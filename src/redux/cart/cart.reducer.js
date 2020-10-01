import { cartActionTypes } from "../constants";
import {
  addItemToCart,
  clearItemFromCart,
  removeFromCart,
} from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.toggleDropdown:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.addItem:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.clearItemFromCart:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.removeItem:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
