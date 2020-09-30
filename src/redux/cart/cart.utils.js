export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItems = cartItems.find((c) => c.id === itemToAdd.id);

  if (existingCartItems) {
    return cartItems.map((i) =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
