import types from '../types'
const { TOGGLE_CART_HIDDEN, ADD_ITEM } = types

const initialState = {
  hidden: true,
  cartItems: [],
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    default:
      return state
  }
}

export default cartReducer
