export function addItemToCart(cartItems, cartItemToAdd) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }
}

export function removeItemFromCart(cartItems, idToRemove) {
  const existsInCart = cartItems.find((cartItem) => cartItem.id === idToRemove)
  if (existsInCart.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === idToRemove
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  } else {
    return cartItems.filter((item) => item.id !== idToRemove)
  }
}
