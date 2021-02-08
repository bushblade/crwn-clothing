import types from '../types'
const { SET_CURRENT_USER } = types

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}
