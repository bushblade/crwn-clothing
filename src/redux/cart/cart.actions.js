import types from '../types'
const { TOGGLE_CART_HIDDEN } = types

export function toggleCartHidden() {
  return {
    type: TOGGLE_CART_HIDDEN,
  }
}
