import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root-reducer'

const initialState = {
  cart: {
    cartItems: localStorage.cartItems ? JSON.parse(localStorage.cartItems) : [],
    hidden: true,
  },
}
// const middleware = []

const store = createStore(rootReducer, initialState, composeWithDevTools())

let currentCartItems = store.getState().cart.cartItems

// subscribe to the store to watch for changes in the cartItems
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousCartItems = currentCartItems
  currentCartItems = store.getState().cart.cartItems

  // check previous array of carts is new array or same array
  const cartsMatch = previousCartItems === currentCartItems
  if (!cartsMatch) {
    // if the cart items changed, store in LS
    localStorage.setItem('cartItems', JSON.stringify(currentCartItems))
  }
})

export default store
