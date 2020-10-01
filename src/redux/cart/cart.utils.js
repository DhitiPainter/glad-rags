export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItems = cartItems.find((c) => c.id === itemToAdd.id);

  if (existingCartItems) {
    return cartItems.map((i) =>
      i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, id) => {
  cartItems.splice(cartItems.indexOf(cartItems.find((x) => x.id === id)), 1);
  return [...cartItems];
};

export const removeFromCart = (cartItems, id) => {
  const existingCartItems = cartItems.find((c) => c.id === id);

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((i) => i.id !== id);
  }

  return cartItems.map((i) =>
    i.id === id ? { ...i, quantity: i.quantity - 1 } : i
  );
};
