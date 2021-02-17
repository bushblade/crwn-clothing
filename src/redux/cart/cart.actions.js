import types from '../types'
const {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} = types

export function toggleCartHidden() {
  return {
    type: TOGGLE_CART_HIDDEN,
  }
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export function clearItemFromCart(id) {
  return {
    type: CLEAR_ITEM_FROM_CART,
    payload: id,
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}
