import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (item) =>
  item.reduce((qty, i) => qty + i.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (item) =>
  item.reduce((qty, i) => qty + i.quantity * i.price, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
