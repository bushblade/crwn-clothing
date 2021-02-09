import types from '../types'
const { TOGGLE_CART_HIDDEN } = types

const initialState = {
  hidden: true,
}

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden }
    default:
      return state
  }
}

export default cartReducer
