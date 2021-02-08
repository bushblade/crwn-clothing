import types from '../types'
const { SET_CURRENT_USER } = types

const initialState = {
  currentUser: null,
}

function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      }
    default:
      return state
  }
}

export default userReducer
