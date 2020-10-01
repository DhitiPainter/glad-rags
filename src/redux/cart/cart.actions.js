import { cartActionTypes } from "../constants";

export const toggleCartDropdown = () => ({
  type: cartActionTypes.toggleDropdown,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.addItem,
  payload: item,
});

export const clearItemFromCart = (id) => ({
  type: cartActionTypes.clearItemFromCart,
  payload: id,
});

export const removeItemFromCart = (id) => ({
  type: cartActionTypes.removeItem,
  payload: id,
});
