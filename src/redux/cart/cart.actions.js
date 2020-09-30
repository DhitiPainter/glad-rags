import { cartActionTypes } from "../constants";

export const toggleCartDropdown = () => ({
  type: cartActionTypes.toggleDropdown,
});

export const addItemToCart = (item) => ({
  type: cartActionTypes.addItem,
  payload: item,
});
