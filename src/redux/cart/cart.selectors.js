import { createSelector } from 'reselect'

function selectCart(state) {
  return state.cart
}

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
)
